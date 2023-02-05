import React from 'react';
import imagenNovedad from '../assets/images/gato-puch-promo.jpg';
import '../assets/css/cardStyles.css';

function ContentLastProductCards(){
    return(
        <div className="novedad">
                <h2>ÚLTIMO PRODUCTO AGREGADO</h2>
                <div className="novedadInterior">
                    <div className="text-center">
                        <img className="imagenNovedad" src={imagenNovedad} alt=" Último Producto "/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
        
        </div>
    )
}

export default ContentLastProductCards;
