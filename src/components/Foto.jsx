import React from 'react'

const Foto = ({fotos}) => {
  
  const { webformatURL, likes, tags, id, views, largeImageURL} = fotos;
  
  return (
    <div className='flex flex-col'>
      <img src={webformatURL} alt={`imagen con id=${id}`} />
      <p className="text-xl text-gray-700">Categoria: {tags}</p>
      <div className='flex flex-row justify-between'>
        <p className='text-sm text-gray-500'>Vistas: {views}</p>
        <p className='text-sm text-gray-500'>Likes: {likes}</p>
      </div>
      <div className='py-2 px-6 bg-yellow-500 text-center font-bold rounded'>
        <a 
          href={largeImageURL}
          target='_blank'
          rel='noopener noreferrer'
        >Ver Imagen</a>
      </div>
    </div>
  )
}

export default Foto