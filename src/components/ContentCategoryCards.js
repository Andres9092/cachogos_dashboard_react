import React from 'react';
import SmallCategoryCards from './SmallCategoryCards';
import {useEffect, useState} from 'react';


// let alimentosInDB = {
//     title: 'Alimentos',
//     color: 'primary', 
//     cuantity: 21,
//     icon: 'fa-clipboard-list'
// }


// let paseosYViajesInDB = {
//     title: 'Paseos y Viajes', 
//     color: 'primary', 
//     cuantity: '79',
//     icon: 'fa-award'
// }


// let camasEIndumentariaInDB = {
//     title: 'Camas e Indumentaria' ,
//     color: 'primary',
//     cuantity: '49',
//     icon: 'fa-user-check'
// }

// let juguetesInDB = {
//     title: 'Juguetes' ,
//     color: 'primary',
//     cuantity: '49',
//     icon: 'fa-user-check'
// }

// let prodCategoryProps = [alimentosInDB, paseosYViajesInDB, camasEIndumentariaInDB, juguetesInDB];

function ContentCategoryCards(){


const [cateProd,setCateProdCount] = useState([])

    
    useEffect( () => {   // npm i cors  INSTALADO EN TERMINAL DEL BACKEND PARA QUE FUNCIONE EL FETCH DE LA API Y SE VEA POR NAVEGADOR LOS RESULTADOS.
        fetch("http://localhost:4000/api/products")
        .then(response => response.json())
        .then(catePr => {
    
            //console.log('catePr:', catePr) // el console.log se ve siempre en el navegador por ser del FRONT END.
            console.log('catePr.countByCategory:', catePr.countByCategory)
            setCateProdCount(JSON.parse(JSON.stringify(catePr.countByCategory)))
            
            console.log('cateProd:', cateProd)
        })
        .catch(error => console.log(error))
    
    }, [])

    

    // let ProdArray = Object.keys(cateProd)
    // let ProdQuantity = Object.values(cateProd)

    // console.log('ProdArray;', ProdArray)

    // console.log('ProdQuantity;', ProdQuantity)

    return (
        

        <div className= "categoriasProd">
            
            <h2>PRODUCTOS POR CATEGORÍAS</h2>   
            <div className="CardsRow">
            {cateProd.map( (catp, i) => {
                console.log('catp:',catp)
                return <SmallCategoryCards {...catp} key={i}/>  
            })}
            </div>
        </div>
    )
}

export default ContentCategoryCards;