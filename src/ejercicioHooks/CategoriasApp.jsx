import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import CategoriasLista from './CategoriasLista'
import CategoriasAdd from './CategoriasAdd'

const CategoriasApp = () => {

    const [categorias, setCategorias] = useState(['Horror'])

    const handleAgregar = () => {
        setCategorias(
            [...categorias, 'Risas']
        )
    }

    return (
      <div>
        <h1>Componentes con hook</h1>
        <ol>
          <CategoriasAdd setCategorias={setCategorias}/>
          <CategoriasLista categorias={categorias}/>
        </ol>
        <Button variant="primary" onClick={handleAgregar}>Agregar</Button>
      </div>
    );
}

export default CategoriasApp
