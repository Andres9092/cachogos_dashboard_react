import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/cardStyles.css';


let iconosProps = "fa-solid fa-tag"

function SmallCategoryCards(props){
    return(

        <div className="BoxTarjetaPadre1">
            <div className="BoxInternoPadre">
                <div className="DivTituloYNumero">    {/*{name: alimentos, count:3}*/}
            
                        <div className=""><p>{props.name}</p></div>
                        <div className="divNumero">{props.count}</div>
                </div>
                <div clasName="DivSimbolo1">
                        <i class={iconosProps}></i>  {/* me trigo el codigo del icono completo de la pag 'fontawsome', de los iconos gratis.  */}
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