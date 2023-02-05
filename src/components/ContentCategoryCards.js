import React from 'react';
import SmallCategoryCards from './SmallCategoryCards';


let alimentosInDB = {
    title: 'Alimentos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}


let paseosYViajesInDB = {
    title: 'Paseos y Viajes', 
    color: 'primary', 
    cuantity: '79',
    icon: 'fa-award'
}


let camasEIndumentariaInDB = {
    title: 'Camas e Indumentaria' ,
    color: 'primary',
    cuantity: '49',
    icon: 'fa-user-check'
}

let juguetesInDB = {
    title: 'Juguetes' ,
    color: 'primary',
    cuantity: '49',
    icon: 'fa-user-check'
}

let prodCategoryProps = [alimentosInDB, paseosYViajesInDB, camasEIndumentariaInDB, juguetesInDB];

function ContentCategoryCards(){
    return (
        

        <div className= "categoriasProd">
            
            <h2>PRODUCTOS POR CATEGORÍAS</h2>
            <div className="CardsRow">
            {prodCategoryProps.map( (cat, i) => {

                return <SmallCategoryCards {...cat} key={i}/>
            
            })}

            </div>
        </div>
    )
}

export default ContentCategoryCards;