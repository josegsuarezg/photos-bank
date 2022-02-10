import React, { useState } from 'react'


const Formulario = ({setBusqueda}) => {

const handleSubmit = e => {
  e.preventDefault();
  setBusqueda(e.target[0].value);
}

  return (
    <form 
      className='flex flex-col md:flex-row gap-5 m-5 aling-center justify-center'
      onSubmit={handleSubmit}
    >
        <input 
          type="text" 
          className='p-2 rounded md:w-1/3'
          placeholder='Busca una imagen, ejemplo: futbol o café'
        />
        <input 
          type="submit" 
          className='py-2 px-6 bg-yellow-500 text-center font-bold rounded'
          value="Buscar"
        />
    </form>
  )
}

export default Formulario