import { useEffect, useState } from "react"
import Header from "./components/Header";
import GridFotos from "./components/GridFotos";


function App() {

  const [fotosApi, setFotosApi] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  
  //Paginador
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  
  
  useEffect(() => {
    
    if (busqueda === '' ) return;
    
    const consultarApi = async () => {
      const imagenesPorPagina = 30;
      const apiKey = '25644840-f728636a9c590703a4ef5bd13';
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`
        const req = await fetch(url);
        const res = await req.json();
        setFotosApi(res.hits);
        
        //Calcular el total de paginas
        const calcularTotalPaginas = Math.ceil(res.totalHits / imagenesPorPagina);
        setTotalPaginas(calcularTotalPaginas)
        
          //ir al principio de la pagina
        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({ behavior: 'smooth'});
    }
    consultarApi();
    
  }, [busqueda, paginaActual])
  
  //Definir la Pagina Anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    if(paginaActual === 1) return;
    setPaginaActual(nuevaPaginaActual);
  }

  //Definir la Página Siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;
    if(paginaActual > totalPaginas) return;
    setPaginaActual(nuevaPaginaActual);
  }
  


  return (
    <>
      <div className="jumbotron">
        <Header 
          setBusqueda={setBusqueda}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <GridFotos 
          fotosApi={fotosApi}
        />
      </div>
      
      <div className="flex flex-row justify-center gap-10 my-10">
        
        {paginaActual > 1 && (
          <button
          type="button"
          className="py-2 px-6 text-white bg-blue-800 text-center font-bold rounded"
          onClick={paginaAnterior}
        >
          &laquo; Anterior</button>
        )}
        
        {paginaActual < totalPaginas && (
          <button
          type="button"
          className="py-2 px-6 text-white  bg-blue-800 text-center font-bold rounded"
          onClick={paginaSiguiente}
        >
          Siguiente &raquo;</button>
        )}
      </div>
    </>
  )
}

export default App
