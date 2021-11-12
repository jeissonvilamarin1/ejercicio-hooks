
import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Formulario = () => {

    const [data, setData] = useState({
        nombre: '',
        email: ''
    })
    
    const {nombre, email} = data

    useEffect(() => {
            console.log('Nuevo nombre', data.nombre);
            return() =>{
                console.log('El componente se desmonto')
            }
    }, [data.nombre])

    const handleForm = (e) =>{
      e.preventDefault()
    }

    const handleOnChange = ({target}) =>{
        setData({
            ...data,
            [target.name]: target.value
        })
    }


    return (
      <>
        <Form onSubmit={ handleForm }>
          <Form.Group className="mb-3" controlId="formulario">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese email"
              value={email}
              onChange={handleOnChange}
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formulario">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={handleOnChange}
              name="nombre"
            />
          </Form.Group>
          <Button variant="primary">Enviar</Button>
        </Form>
      </>
    );
}

export default Formulario
