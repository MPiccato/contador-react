import React, {useState} from 'react';

import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import MPLogo from './imagenes/mpiccato-face.jpeg';

const App = () => {


  // Declaro el estado de la aplicación
  const [numClicks, setContador] = useState(0);

  // función que se ejecuta cuando el usuario hace click en el botón
  const manejarClick = (e) => {
   
    setContador(numClicks + 1);
  };

  const reiniciarContador = (e) => {

    setContador(0);
  };

  return (
    <div className='App'>
      <div className='mpdata-logo-contenedor'>
        <img className='mpdata-logo' src={MPLogo} alt='logo' />

      </div>
      <div className='contenedor-contador'>
        <Contador numClicks={numClicks} />
        <Boton 
          texto='Clicks + 1'
          esBotonClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='Reniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />

      </div>
    </div>
  )
}

export default App


