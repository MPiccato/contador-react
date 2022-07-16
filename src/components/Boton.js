import React from 'react';
import '../hojas-de-estilo/Boton.css';

const Boton = ({ texto, esBotonClick, manejarClick }) => {
    return (
        <button
            className={esBotonClick ? 'boton-click' : 'boton-reiniciar'}
            onClick={manejarClick}
        //onClick={esBotonClick ? () => console.log('click') : () => console.log('reiniciar')}
        >
            {texto}
        </button>
    )
}

export default Boton
