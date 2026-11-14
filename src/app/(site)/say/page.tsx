import React from 'react'

import SayClient from './_components/SayClient'

const description = 'TEE-moh SHTOW-ding-uh. Hear how to pronounce Timo Staudinger.'

export const metadata = {
  title: 'How to say my name',
  description,
  openGraph: {
    title: 'How to say “Timo Staudinger”',
    description,
    url: 'https://timostaudinger.com/say',
  },
  twitter: {
    title: 'How to say “Timo Staudinger”',
    description,
  },
}

const Say = () => <SayClient />

export default Say
