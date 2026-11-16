'use client'

import React, {useEffect, useRef, useState} from 'react'

import Layout from '../../../../components/layout/Layout'

interface Syllable {
  text: string
  hint: string
  stress?: boolean
}

const WORDS: Syllable[][] = [
  [
    {text: 'Ti', hint: 'tee', stress: true},
    {text: 'mo', hint: 'moh'},
  ],
  [
    {text: 'Stau', hint: 'shtow', stress: true},
    {text: 'ding', hint: 'ding'},
    {text: 'er', hint: 'uh'},
  ],
]

interface Recording {
  src: string
  // [start, end] of each syllable in seconds, measured from the recording.
  segments: [number, number][]
}

const RECORDINGS = {
  full: {
    src: '/assets/say/timo-staudinger.m4a',
    segments: [
      [0.1, 0.22],
      [0.22, 0.38],
      [0.5, 0.78],
      [0.78, 0.9],
      [0.9, 1.04],
    ],
  },
  slow: {
    src: '/assets/say/timo-staudinger-slow.m4a',
    segments: [
      [0.14, 0.28],
      [0.28, 0.6],
      [1.22, 1.64],
      [1.64, 1.84],
      [1.84, 2.06],
    ],
  },
} satisfies Record<string, Recording>

type Mode = keyof typeof RECORDINGS

const MISTAKES = [
  {say: 'Temu', why: 'that’s the shop. It ends in “oh”.'},
  {say: 'TIM-oh', why: 'the i sounds like “ee”, not like in “Tim”.'},
  {say: 'STAW-din-jer', why: 'it’s “sht”, and the g stays hard.'},
]

const PlayIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" width="14" height="14">
    <path d="M3 1.5v13l11-6.5z" fill="currentColor" />
  </svg>
)

const SayClient = () => {
  const [active, setActive] = useState<number | null>(null)
  const [playing, setPlaying] = useState(false)
  const audio = useRef<Partial<Record<Mode, HTMLAudioElement>>>({})
  const frame = useRef<number | undefined>(undefined)

  const stopAll = () => {
    if (frame.current !== undefined) cancelAnimationFrame(frame.current)
    frame.current = undefined
    Object.values(audio.current).forEach((el) => {
      el.pause()
      el.currentTime = 0
    })
  }

  useEffect(() => {
    const els = audio.current
    ;(Object.keys(RECORDINGS) as Mode[]).forEach((mode) => {
      const el = new Audio(RECORDINGS[mode].src)
      el.preload = 'auto'
      els[mode] = el
    })
    return () => {
      stopAll()
      Object.keys(els).forEach((mode) => delete els[mode as Mode])
    }
  }, [])

  const play = (mode: Mode) => {
    const el = audio.current[mode]
    if (!el) return
    stopAll()
    const {segments} = RECORDINGS[mode]

    const finish = () => {
      if (frame.current !== undefined) cancelAnimationFrame(frame.current)
      frame.current = undefined
      setActive(null)
      setPlaying(false)
    }

    // Follow the playhead, so highlights stay in sync however long the
    // audio takes to start.
    const tick = () => {
      const t = el.currentTime
      const i = segments.findIndex(([start, end]) => t >= start && t < end)
      setActive(i === -1 ? null : i)
      frame.current = requestAnimationFrame(tick)
    }

    el.onended = finish
    el.onerror = finish
    setPlaying(true)
    el.play().then(() => {
      frame.current = requestAnimationFrame(tick)
    }, finish)
  }

  return (
    <Layout showFooter>
      <h1 className="visually-hidden">How to say my name</h1>

      <section className="stage" aria-label="Pronunciation">
        <div className="name" role="img" aria-label="Timo Staudinger, pronounced TEE-moh SHTOW-ding-uh">
          {WORDS.map((word, w) => (
            <div className="word" key={w}>
              {word.map((syl, s) => {
                const i = WORDS.slice(0, w).flat().length + s
                const classes = ['syl', syl.stress ? 'stress' : '', active === i ? 'on' : '']
                return (
                  <div className={classes.join(' ')} key={i} aria-hidden="true">
                    <span className="text">{syl.text}</span>
                    <span className="hint">{syl.hint}</span>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <div className="controls">
          <button type="button" className="play" onClick={() => play('full')} disabled={playing}>
            <PlayIcon />
            Play
          </button>
          <button type="button" className="play ghost" onClick={() => play('slow')} disabled={playing}>
            Slowly
          </button>
        </div>

        <p className="ipa">/ˈtiːmo ˈʃtaʊ̯dɪŋɐ/</p>
      </section>

      <ul className="mistakes">
        {MISTAKES.map((m) => (
          <li key={m.say}>
            Not <span className="wrong">{m.say}</span>: {m.why}
          </li>
        ))}
      </ul>

      <p className="closing">
        Close enough is great. “SHTOW-ding-er” with an English r works just as
        well.
      </p>

      <style jsx>{`
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
        }

        .stage {
          margin-top: 60px;
          text-align: center;
        }

        .name {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-end;
          gap: 0 40px;
        }

        .word {
          display: flex;
          gap: 2px;
        }

        .syl {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .text {
          font-size: 4.5em;
          font-weight: 200;
          line-height: 1;
          transition:
            color 0.18s,
            transform 0.18s;
        }

        .stress .text {
          font-weight: 500;
        }

        .on .text {
          color: rgb(31, 148, 221);
          transform: translateY(-4px);
        }

        .hint {
          font-size: 0.85em;
          color: rgb(80, 107, 135);
          letter-spacing: 0.04em;
        }

        .controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }

        .play {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 0;
          border-radius: 999px;
          padding: 12px 24px;
          font: inherit;
          font-weight: 500;
          cursor: pointer;
          color: #fff;
          background: rgb(0, 110, 180);
        }

        .play:hover {
          background: rgb(0, 68, 114);
        }

        .play.ghost {
          color: rgb(0, 110, 180);
          background: transparent;
          box-shadow: inset 0 0 0 1.5px rgb(0, 110, 180);
        }

        .play.ghost:hover {
          color: rgb(0, 68, 114);
          box-shadow: inset 0 0 0 1.5px rgb(0, 68, 114);
        }

        .play:disabled {
          opacity: 0.6;
          cursor: default;
        }

        .play:focus-visible {
          outline: 2px solid rgb(0, 110, 180);
          outline-offset: 3px;
        }

        .ipa {
          margin: 20px 0 0;
          font-size: 0.85em;
          color: rgb(80, 107, 135);
          font-family: ui-monospace, Menlo, monospace;
        }

        .mistakes {
          list-style: none;
          max-width: 480px;
          margin: 60px auto 0;
          padding: 0;
        }

        .wrong {
          text-decoration: line-through;
          text-decoration-color: rgb(194, 65, 45);
          text-decoration-thickness: 2px;
        }

        .closing {
          max-width: 480px;
          margin: 20px auto 0;
          color: rgb(80, 107, 135);
        }

        @media (max-width: 600px) {
          .stage {
            margin-top: 40px;
          }

          .name {
            gap: 0 20px;
          }

          .text {
            font-size: 3em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .text {
            transition: none;
          }
        }
      `}</style>
    </Layout>
  )
}

export default SayClient
