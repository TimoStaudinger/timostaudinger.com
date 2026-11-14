import {ImageResponse} from 'next/og'

export const alt = 'Timo Staudinger is pronounced TEE-moh SHTOW-ding-uh'
export const size = {width: 1200, height: 630}
export const contentType = 'image/png'

const OpengraphImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 96px',
          background: 'rgb(16, 42, 66)',
          color: '#ffffff',
        }}
      >
        <div style={{fontSize: 36, color: '#a9c4dc', marginBottom: 24}}>
          Timo Staudinger is pronounced
        </div>
        <div style={{display: 'flex', fontSize: 84, gap: 28}}>
          <div style={{display: 'flex', gap: 2}}>
            <div style={{color: '#6cc4f7'}}>TEE</div>
            <div>-moh</div>
          </div>
          <div style={{display: 'flex', gap: 2}}>
            <div style={{color: '#6cc4f7'}}>SHTOW</div>
            <div>-ding-uh</div>
          </div>
        </div>
        <div style={{fontSize: 32, color: '#a9c4dc', marginTop: 40}}>
          /ˈtiːmo ˈʃtaʊdɪŋɐ/ · timostaudinger.com/say
        </div>
      </div>
    ),
    size,
  )

export default OpengraphImage
