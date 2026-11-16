'use client'

import React, {useEffect, useRef, useState} from 'react'

import Layout from '../../../../components/layout/Layout'

interface Syllable {
  text: string
  hint: string
  stress?: boolean
  // Index of the chunk spoken in "slowly" mode.
  chunk: number
}

const WORDS: Syllable[][] = [
  [
    {text: 'Ti', hint: 'tee', stress: true, chunk: 0},
    {text: 'mo', hint: 'moh', chunk: 0},
  ],
  [
    {text: 'Stau', hint: 'shtow', stress: true, chunk: 1},
    {text: 'ding', hint: 'ding', chunk: 2},
    {text: 'er', hint: 'uh', chunk: 2},
  ],
]

const SYLLABLES = WORDS.flat()
const CHUNKS = ['Timo', 'Stau', 'dinger']
// Approximate onset of each syllable (ms) when the full name is spoken.
const ONSETS = [0, 230, 470, 760, 960]

const MISTAKES = [
  {say: 'Temu', why: 'that’s the shop. It ends in “oh”.'},
  {say: 'TIM-oh', why: 'the i sounds like “ee”, not like in “Tim”.'},
  {say: 'STAW-din-jer', why: 'it’s “sht”, and the g stays hard.'},
]

const speak = (text: string, rate: number, onStart?: () => void): Promise<void> =>
  new Promise((resolve) => {
    const synth = typeof window !== 'undefined' ? window.speechSynthesis : undefined
    if (!synth) {
      resolve()
      return
    }
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'de-DE'
    utterance.rate = rate
    const voice = synth
      .getVoices()
      .find((v) => v.lang.toLowerCase().replace('_', '-').startsWith('de'))
    if (voice) utterance.voice = voice
    if (onStart) utterance.onstart = onStart
    utterance.onend = () => resolve()
    utterance.onerror = () => resolve()
    synth.speak(utterance)
  })

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const PlayIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" width="14" height="14">
    <path d="M3 1.5v13l11-6.5z" fill="currentColor" />
  </svg>
)

const SayClient = () => {
  const [active, setActive] = useState<number[]>([])
  const [playing, setPlaying] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  // Bumped on every new playback and on unmount, so a stale async loop
  // stops at its next checkpoint.
  const run = useRef(0)

  const stopAll = () => {
    run.current++
    timers.current.forEach(clearTimeout)
    timers.current = []
    window.speechSynthesis?.cancel()
  }

  useEffect(() => {
    // Warm up the voice list, which some browsers load lazily.
    window.speechSynthesis?.getVoices()
    return stopAll
  }, [])

  const startHighlights = (id: number) => {
    if (id !== run.current) return
    ONSETS.forEach((t, i) => {
      timers.current.push(setTimeout(() => setActive([i]), t))
    })
  }

  const finish = (id: number) => {
    if (id !== run.current) return
    timers.current.forEach(clearTimeout)
    timers.current = []
    setActive([])
    setPlaying(false)
  }

  const playFull = async () => {
    stopAll()
    const id = run.current
    setPlaying(true)
    await speak('Timo Staudinger', 0.85, () => startHighlights(id))
    await wait(200)
    finish(id)
  }

  const playSlow = async () => {
    stopAll()
    const id = run.current
    setPlaying(true)
    for (let chunk = 0; chunk < CHUNKS.length; chunk++) {
      if (id !== run.current) return
      const syllables = SYLLABLES.flatMap((s, i) => (s.chunk === chunk ? [i] : []))
      await speak(CHUNKS[chunk], 0.7, () => {
        if (id === run.current) setActive(syllables)
      })
      if (id === run.current) setActive([])
      await wait(350)
    }
    finish(id)
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
                const classes = ['syl', syl.stress ? 'stress' : '', active.includes(i) ? 'on' : '']
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
          <button type="button" className="play" onClick={playFull} disabled={playing}>
            <PlayIcon />
            Play
          </button>
          <button type="button" className="play ghost" onClick={playSlow} disabled={playing}>
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
