import React, { useEffect, useRef, useState } from 'react'

const CategoriasAdd = ({setCategorias}) => {
    const [search, setSearch] = useState('')
    const searchref = useRef()

    const handleInputChange = (e) =>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setCategorias(categorias => [search, ...categorias])
        setSearch('')
    }

    useEffect(()=>{
        searchref.current.focus()
    }, []) 


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    ref={searchref}
                    name="search"
                    placeholder="categories"
                    value={search}
                    onChange={handleInputChange}
                />    
            </form>   
        </>
    )
}

export default CategoriasAdd
