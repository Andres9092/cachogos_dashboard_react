import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/cardStyles.css';


function ProdListCards(props){
    return(

        <div className="BoxProdPadre">
            
                <div className="ImagenProdCard">
                    <img className="imagenProd" src={props.image} alt="Imagen del producto"/>     
                </div>
                        
                <div className="Name&PriceProd">
                        <p className="">{props.name}</p>
                        <p className="">{props.price}</p>
                </div>
          
        </div>
        
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

ProdListCards.defaultProps = {
    image: 'Imagen no disponible',
    name: 'Nombre no disponible',
    price: 'Precio no disponible'  
}

/* PROPTYPES */

ProdListCards.propTypes = {
    attributes: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired        
    })
}

export default ProdListCards;