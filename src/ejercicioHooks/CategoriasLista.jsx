import React from 'react'
import Cards from './Cards'

const CategoriasLista = ({ categorias }) => {
    return (
        <div>
            <h1>Lista de categorias</h1>
            {
                categorias.map((cate, index) => {
                    return(
                        <Cards key={index} categorias={cate}/>
                    )
                })
            }
        </div>
    )
}

export default CategoriasLista
