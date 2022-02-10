import React from 'react'
import Formulario from './Formulario'

const Header = ({setBusqueda}) => {
  return (
    <div className='bg-slate-500 py-4'>
      <h1 className='font-bold text-4xl text-gray-900 text-center uppercase'>Buscador de Imagenes</h1>
      
      <Formulario 
        setBusqueda={setBusqueda}
      />
    </div>
  )
}

export default Header