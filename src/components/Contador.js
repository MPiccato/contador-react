import React from 'react'
import '../hojas-de-estilo/Contador.css'

const Contador = ({ numClicks }) => {
    return (
        <div className='contador'>
            {numClicks}
        </div>
    )
}

export default Contador
