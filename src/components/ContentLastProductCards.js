import React from 'react';
import imagenNovedad from '../assets/images/gato-puch-promo.jpg';
import '../assets/css/cardStyles.css';

function ContentLastProductCards(){
    // const [lastProd,setLastProd] = useState([])

    
    // useEffect( () => {   // npm i cors  INSTALADO EN TERMINAL DEL BACKEND PARA QUE FUNCIONE EL FETCH DE LA API Y SE VEA POR NAVEGADOR LOS RESULTADOS.
    //     fetch("http://localhost:4000/api/products")
    //     .then(response => response.json())
    //     .then(catePr => {
    
    //         //console.log('catePr:', catePr) // el console.log se ve siempre en el navegador por ser del FRONT END.
    //         console.log('catePr.countByCategory:', catePr.countByCategory)
    //         setLastProd(JSON.parse(JSON.stringify(catePr.countByCategory)))
            
    //         console.log('cateProd:', cateProd)
    //     })
    //     .catch(error => console.log(error))
    
    // }, [])
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
