import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/cardStyles.css';

function SmallCategoryCards(props){
    return(

        <div className="BoxTarjetaPadre">
            <div className={`BoxInternoPadre-${props.color}`}>
                <div className="DivTituloYNumero">
            
                        <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.title}</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cuantity}</div>
                </div>
                        
                <div className="DivSimbolo">
                        <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
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