import React, { useEffect, useState } from 'react'

const Cards = ({ categorias }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        imgGif(categorias)
        .then(imgData => setImages(imgData))
    }, [categorias])

    const imgGif = async() =>{
        const url =
        "https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=UdkWw1fwCWWd3qUXQE0c5mjXH47ymqCC";
        const resp = await fetch(url);
        const { data } = await resp.json();
    
        const imgData = data.map((img)=>{
            return{
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        return imgData
    }

    

    return (
        <div>
            <ol>
                {
                    images.map((img) =>(
                        <li key={img.id}>
                            <h3>{img.title}</h3>
                            <img src={img.url} alt="gif"/>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Cards
