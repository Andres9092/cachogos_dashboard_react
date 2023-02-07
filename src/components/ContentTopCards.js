import React from 'react';
import {useEffect, useState} from 'react';


// let productosInDB = {
//     title: 'Productos',
//     color: 'primary', 
//     cuantity: 21,
//     icon: 'fa-clipboard-list'
// }


// let categoriasInDB = {
//     title: 'Categorías', 
//     color: 'success', 
//     cuantity: '79',
//     icon: 'fa-award'
// }


// let usuariosInDB = {
//     title: 'Usuarios' ,
//     color: 'warning',
//     cuantity: '49',
//     icon: 'fa-user-check'
// }

// let cartProps = [productosInDB, categoriasInDB, usuariosInDB];


function ContentTopCards(){

const [productsCount,setProductosCount] = useState([])
// const [categoriasCount,setCategoriasCount] = useState([])
const [usuariosCount,setUsuariosCount] = useState([])

useEffect( () => {   // npm i cors  INSTALADO EN TERMINAL DEL BACKEND PARA QUE FUNCIONE EL FETCH DE LA API Y SE VEA POR NAVEGADOR LOS RESULTADOS.
    console.log('useEffect')
    fetch("http://localhost:4000/api/products")
    .then(response => response.json())
    .then(productos => {

        console.log('productos:', productos) // el console.log se ve siempre en el navegador por ser del FRONT END.
        setProductosCount(productos.count)

    })
    .catch(error => console.log(error))

}, [])


// useEffect( () => {
//     fetch("url")
//     .then(response => response.json())
//     .then(categorias => {

//         console.log(categorias)
//         setCategoriasCount(categorias.count)

//     })
//     .catch(error => console.log(error))

// }, )


useEffect( () => {
    fetch("http://localhost:4000/api/users")
    .then(response => response.json())
    .then(usuarios => {

        console.log(usuarios)
        setUsuariosCount(usuarios.count)

    })
    .catch(error => console.log(error))

}, )

    return (
    
        <div className="categoriasProd">
            <h2>APP DASHBOARD - GENERAL</h2>
            <div className="CardsRow">

                <div className="BoxTarjetaPadre">
                    <div className="BoxInternoPadre">
                        <div className="DivTituloYNumero">
                
                            <div className=""><p>Productos</p></div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{productsCount}</div>
                        </div>
                            
                        <div className="DivSimbolo">
                            <i fa-2x text-gray-300></i>
                        </div>
                    </div>
                </div>    

                <div className="BoxTarjetaPadre">
                    <div className="BoxInternoPadre">
                        <div className="DivTituloYNumero">
                
                            <div className=""><p>Categorías de animales</p></div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800"><p>4</p></div>
                        </div>
                            
                        <div className="DivSimbolo">
                            <i fa-2x text-gray-300></i>
                        </div>
                    </div>
                </div>  

                <div className="BoxTarjetaPadre">
                    <div className="BoxInternoPadre">
                        <div className="DivTituloYNumero">
                
                            <div className=""><p>Categorías de usuarios</p></div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{usuariosCount}</div>
                        </div>
                            
                        <div className="DivSimbolo">
                            <i fa-2x text-gray-300></i>
                        </div>
                    </div>
                </div>




            </div>
            
        </div>
    )
}

export default ContentTopCards;