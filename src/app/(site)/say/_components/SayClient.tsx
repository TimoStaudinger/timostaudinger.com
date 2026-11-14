'use client'

import React, {useEffect, useRef, useState} from 'react'

import ContentHeader from '../../../../components/ui/ContentHeader'
import Layout from '../../../../components/layout/Layout'

// Drop a recording at this path and the page plays it instead of the
// browser's speech synthesis.
const RECORDING_SRC = '/assets/say/timo-staudinger.mp3'

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
  {say: 'TIE-moh', why: 'The i is a long “ee”, like in “Tina”.'},
  {
    say: 'STAW-din-jer',
    why: 'St at the start of a German word sounds like “sht”, and the g stays hard.',
  },
  {say: 'Stow-DING-er', why: 'The stress goes on the first part: STAU-dinger.'},
]

const speak = (text: string, rate: number): Promise<void> =>
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
  const recording = useRef<HTMLAudioElement | null>(null)
  const hasRecording = useRef<boolean | null>(null)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    // Warm up the voice list, which some browsers load lazily.
    window.speechSynthesis?.getVoices()
    return () => {
      timers.current.forEach(clearTimeout)
      window.speechSynthesis?.cancel()
      recording.current?.pause()
    }
  }, [])

  const reset = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    window.speechSynthesis?.cancel()
    recording.current?.pause()
  }

  const playRecording = async (): Promise<boolean> => {
    if (hasRecording.current === false) return false
    if (!recording.current) recording.current = new Audio(RECORDING_SRC)
    const audio = recording.current
    audio.currentTime = 0
    try {
      await audio.play()
      hasRecording.current = true
      await new Promise<void>((resolve) => {
        audio.onended = () => resolve()
        audio.onpause = () => resolve()
      })
      return true
    } catch {
      hasRecording.current = false
      return false
    }
  }

  const playFull = async () => {
    reset()
    setPlaying(true)
    ONSETS.forEach((t, i) => {
      timers.current.push(setTimeout(() => setActive([i]), t))
    })
    const played = await playRecording()
    if (!played) await speak('Timo Staudinger', 0.85)
    await wait(200)
    setActive([])
    setPlaying(false)
  }

  const playSlow = async () => {
    reset()
    setPlaying(true)
    for (let chunk = 0; chunk < CHUNKS.length; chunk++) {
      setActive(
        SYLLABLES.flatMap((s, i) => (s.chunk === chunk ? [i] : [])),
      )
      await speak(CHUNKS[chunk], 0.7)
      await wait(350)
    }
    setActive([])
    setPlaying(false)
  }

  return (
    <Layout showFooter>
      <ContentHeader
        title="How to Say My Name"
        excerpt="A quick guide for colleagues, customers, and conference hosts"
        showProfile={false}
      />

      <section className="stage" aria-label="Pronunciation">
        <div className="name" aria-label="Timo Staudinger, pronounced TEE-moh SHTOW-ding-uh">
          {WORDS.map((word, w) => (
            <div className="word" key={w}>
              {word.map((syl, s) => {
                const i = WORDS.slice(0, w).flat().length + s
                const classes = ['syl', syl.stress ? 'stress' : '', active.includes(i) ? 'on' : '']
                return (
                  <div className={classes.join(' ')} key={i} aria-hidden="true">
                    <span className="dot" />
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

      <h2>The usual slip-ups</h2>
      <div className="mistakes">
        {MISTAKES.map((m) => (
          <div className="mistake" key={m.say}>
            <span className="label no">Not quite</span>
            <span className="wrong">{m.say}</span>
            <span className="why">{m.why}</span>
          </div>
        ))}
      </div>

      <div className="right">
        <span className="label yes">Yes</span>
        <span className="answer">
          <span className="nowrap">
            <b>TEE</b>-moh
          </span>{' '}
          <span className="nowrap">
            <b>SHTOW</b>-ding-uh
          </span>
        </span>
        <span className="why">
          Close enough is great. “SHTOW-ding-er” with an English r works just
          as well.
        </span>
      </div>

      <style jsx>{`
        .stage {
          margin-top: 40px;
          padding: 40px 32px;
          border-radius: 15px;
          background: rgb(243, 247, 250);
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

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .stress .dot {
          background: rgb(31, 148, 221);
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
          background: rgb(31, 148, 221);
        }

        .play:hover {
          background: rgb(0, 68, 114);
        }

        .play.ghost {
          color: rgb(31, 148, 221);
          background: transparent;
          box-shadow: inset 0 0 0 1.5px rgb(31, 148, 221);
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
          outline: 2px solid rgb(31, 148, 221);
          outline-offset: 3px;
        }

        .ipa {
          margin: 24px 0 0;
          color: rgb(80, 107, 135);
          font-family: ui-monospace, Menlo, monospace;
        }

        h2 {
          margin-top: 50px;
          font-weight: 300;
        }

        .mistakes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
        }

        .mistake,
        .right {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 16px 18px;
          border-radius: 10px;
        }

        .mistake {
          background: rgba(194, 65, 45, 0.08);
        }

        .right {
          margin-top: 12px;
          padding: 22px;
          background: rgba(31, 148, 221, 0.1);
        }

        .label {
          font-size: 0.72em;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .label.no {
          color: rgb(194, 65, 45);
        }

        .label.yes {
          color: rgb(30, 138, 90);
        }

        .wrong {
          font-size: 1.4em;
          font-weight: 300;
          text-decoration: line-through;
          text-decoration-color: rgb(194, 65, 45);
          text-decoration-thickness: 2px;
        }

        .answer {
          font-size: 2em;
          font-weight: 300;
        }

        .nowrap {
          white-space: nowrap;
        }

        .answer b {
          font-weight: 600;
        }

        .why {
          font-size: 0.9em;
          line-height: 1.5;
          color: rgb(80, 107, 135);
        }

        @media (max-width: 600px) {
          .stage {
            padding: 32px 16px;
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
