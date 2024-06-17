import React from 'react'
import AltaAlojamiento from './TipoAlojamiento/AltaAlojamiento'
import AltaServicio from './TipoAlojamiento/AltaServicio'

const TipoAlojamiento = () => {
  return (
    <div>
      <div className='d-flex justify-content-center gap-3'>
        <div>
          <AltaAlojamiento/>
        </div>
        <div>
          <AltaServicio/>
        </div>
      </div>
    </div>
  )
}

export default TipoAlojamiento