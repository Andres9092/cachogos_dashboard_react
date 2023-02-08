import React from 'react';
import imagenNovedad from '../assets/images/gato-puch-promo.jpg';
import '../assets/css/cardStyles.css';
import {useEffect, useState} from 'react'

function ContentLastProductCards(){
    const [lastProd, setLastProd] = useState([])
    
    useEffect( () => {   // npm i cors  INSTALADO EN TERMINAL DEL BACKEND PARA QUE FUNCIONE EL FETCH DE LA API Y SE VEA POR NAVEGADOR LOS RESULTADOS.
        fetch("http://localhost:4000/api/products")
        .then(response => response.json())
        .then(product => {

            //console.log('catePr:', catePr) // el console.log se ve siempre en el navegador por ser del FRONT END.
            console.log('products:', product.products)  //trae array de objetos osea de productos.
            setLastProd(JSON.parse(JSON.stringify(product.products.pop())))  //me quedo con el ultimo objeto producto. Ademas lo transformo a formato no Json, osea formato Objeto literal

            console.log('product:', lastProd)

        })
        .catch(error => console.log(error))

    }, [])
  

    return(
        <div className="novedadLastPr">
                <h2 className='titulosStatistics'>ÚLTIMO PRODUCTO AGREGADO</h2>
                <div className="novedadInterior">
                    <div className="text-center">
                        <img className="imagenNovedad" src={lastProd.imagesURL} alt=" Último Producto "/>
                    </div>
                    
                    <p>{lastProd.name}</p>
                    <p>{lastProd.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>

        </div>
    )
}

export default ContentLastProductCards;
