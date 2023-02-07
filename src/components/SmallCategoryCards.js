import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/cardStyles.css';


function SmallCategoryCards(){
    return(

        <div className="BoxTarjetaPadre">
            <div className="BoxInternoPadre">
                <div className="DivTituloYNumero">
            
                        <div className=""><p>Alimentos</p></div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{cateProd}</div>
                </div>
                        
            </div>
        </div>
        
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCategoryCards.defaultProps = {
    title: 'No Title',
    color: 'success',
    cuantity: 'No cuatity',
    icon: 'fa-clipboard-list'
}

/* PROPTYPES */

SmallCategoryCards.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    })
}



export default SmallCategoryCards;