import React from 'react';
import imageFISH from '../assets/images/mundofish.png';
import imageCAT from '../assets/images/mundocat.png';
import imageDOG from '../assets/images/mundodog.png';
import imageBIRD from '../assets/images/mundobird.png';

import imageJUGUETES from '../assets/images/rascador.webp';
import imageALIMENTOS from '../assets/images/card-produc1.jpg';
import imagePASEOSYVIAJES from '../assets/images/funda perro auto.webp';
import imageCAMASEIND from '../assets/images/colchon mascota.webp';

import '../assets/css/style-home.css';

function MainContent(){
    return(
        <React.Fragment>

<link rel="stylesheet" href="/css/style-home.css"></link>

<main>

        <nav className = "divisionesCategorias">

            <div className='contenedoresAnimales'>
                <h2>Categorías de animales</h2>
                <div className="categoriasHome">
                    <div className="cat1"> <img src={imageCAT} alt=""/>
                    </div>
                    <div className="cat1"> <img src={imageDOG} alt=""/>
                    </div>
                    <div className="cat1"> <img src={imageBIRD} alt=""/>
                    </div>
                    <div className="cat1"> <img src={imageFISH} alt=""/>
                    </div>

                </div>
            </div>

            <div className='contenedoresProductos' >
                <h2>Categorías de productos</h2>
                <div className="categoriasHome">
                    <div className="cat2">
                        <h3>Alimentos</h3>
                        <img src={imageALIMENTOS} alt=""/>
                    </div>

                    <div className="cat2">
                        <h3>Paseos y viajes</h3>
                        <img src={imagePASEOSYVIAJES} alt=""/>
                    </div>
                    <div className="cat2"> 
                        <h3>Camas e indumentaria</h3>
                        <img src={imageCAMASEIND} alt=""/>
                    </div>
                    <div className="cat2"> 
                        <h3>Juguetes</h3>
                        <img src={imageJUGUETES} alt=""/>
                    </div>

                </div>
            </div>
            </nav>


</main>

        
        </React.Fragment>

)
}
export default MainContent
    