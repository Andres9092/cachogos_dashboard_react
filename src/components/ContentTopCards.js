import React from 'react';
import {useEffect, useState} from 'react';
import '../assets/css/style-home.css';


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

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>


const [productsCount,setProductosCount] = useState([])
const [categoriasCount,setCategoriasCount] = useState([])
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


useEffect( () => {
    fetch("http://localhost:4000/api/products")
    .then(response => response.json())
    .then(categorias => {

        console.log(categorias)
        setCategoriasCount(categorias.countAnimalCategory)

    })
    .catch(error => console.log(error))

}, )


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
            <h2 className='titulosStatistics'>APP DASHBOARD - GENERAL</h2>
            <div className="CardsRow">

                <div className="BoxTarjetaPadre">
                    <div className="BoxInternoPadre">
                        <div className="DivTituloYNumero">
                
                            <div className=""><p>Productos</p></div>    
                            <div className="divNumero">{productsCount}</div>
                        </div>
                    
                        {/*                                 // productsCount es la variable con el nuevo estado dado por setUsuariosCount que trae la info de la API atraves del fetch.  */}
                        <div clasName= "DivSimbolo">
                        <i class="fa-solid fa-list fa-lg"></i>  {/* me trigo el codigo del icono completo de la pag 'fontawsome', de los iconos gratis.  */}
                        </div>
                    </div>
                </div>    
              
                <div className="BoxTarjetaPadre">
                    <div className="BoxInternoPadre">
                        <div className="DivTituloYNumero">
                
                            <div className=""><p>Categorías de animales</p></div>
                            <div className="divNumero">{categoriasCount}</div>
                        </div>
                            
                        <div className="DivSimbolo">
                            <i class="fa-solid fa-paw fa-lg"></i>
                        </div>
                    </div>
                </div>  

                <div className="BoxTarjetaPadre">
                    <div className="BoxInternoPadre">
                        <div className="DivTituloYNumero">
                
                            <div className=""><p>Cantidad de usuarios</p></div>
                            <div className="divNumero">{usuariosCount}</div>
                        </div>
                            
                        <div className="DivSimbolo">
                            <i class="fa-solid fa-user fa-lg"></i>
                        </div>
                    </div>
                </div>




            </div>
            
        </div>
    )
}

export default ContentTopCards;