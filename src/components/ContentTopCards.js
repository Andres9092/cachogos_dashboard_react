import React from 'react';
import SmallTopCards from './SmallTopCards';


let productosInDB = {
    title: 'Productos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}


let categoriasInDB = {
    title: 'Categorías', 
    color: 'success', 
    cuantity: '79',
    icon: 'fa-award'
}


let usuariosInDB = {
    title: 'Usuarios' ,
    color: 'warning',
    cuantity: '49',
    icon: 'fa-user-check'
}

let cartProps = [productosInDB, categoriasInDB, usuariosInDB];

function ContentTopCards(){
    return (
    
        
        <div className="categoriasProd">
            <h2>APP DASHBOARD - GENERAL</h2>
            <div className="CardsRow">
                {cartProps.map( (cart, i) => {

                    return <SmallTopCards {...cart} key={i}/>
                
                })}

            </div>
        </div>
    )
}

export default ContentTopCards;