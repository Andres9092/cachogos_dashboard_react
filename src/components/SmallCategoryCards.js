import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/cardStyles.css';


function SmallCategoryCards(props){
    return(

        <div className="BoxTarjetaPadre">
            <div className="BoxInternoPadre">
                <div className="DivTituloYNumero">    {/*name: alimentos, count:3*/}
            
                        <div className=""><p>{props.name}</p></div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.count}</div>
                </div>
                        
            </div>
        </div>
        
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCategoryCards.defaultProps = {
    name: 'Not found Title',
    count: 'Not found'
}

/* PROPTYPES */

SmallCategoryCards.propTypes = {
    attributes: PropTypes.shape({
        name: PropTypes.string.isRequired,
        count: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
    })
}



export default SmallCategoryCards;