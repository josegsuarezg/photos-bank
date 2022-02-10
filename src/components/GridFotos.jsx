import React from 'react'
import Foto from './Foto'

const GridFotos = ({fotosApi}) => {
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5'>
      {fotosApi.map(fotos => (
          <Foto 
            key={fotos.id}
            fotos={fotos}
          />
      ))}
    </div>
  )
}

export default GridFotos