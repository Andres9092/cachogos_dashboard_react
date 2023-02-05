import React from 'react';
import image from '../assets/images/Logo7 color sec 1.png';
import '../assets/css/style.css';
import ProductsListCompleto from './ProductsListCompleto';
import {Link, Switch, Route} from 'react-router-dom';
import App from './App';

// import GenresInDb from './GenresInDb';
// import LastMovieInDb from './LastMovieInDb';
// import ContentRowMovies from './ContentRowMovies';
// import SearchMovies from './SearchMovies';
// import NotFound from './NotFound';
// import {Link, Route, Switch} from 'react-router-dom';

function TopBar(){
    return(
        <React.Fragment>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>

<header className="mainHeader"> 
    

  <div className="contenedorSuperior">
   
   
           <ul className ="listaLogo-Llamada-Numero-wapp">

               <li><a className ="phone" href="aaaaa.html"><i className="fa-solid fa-phone" ></i></a></li>
               <li><a className="numero" href="bbbbb.html">0800-999-2345</a></li>                
               <li className="separador">|</li>                                
               <li><a className="logoWapp" href="bbbbb.html"><i className="fa-brands fa-whatsapp"></i></a></li>
           </ul>                 
      
  </div>
    

   <div className = "contenedorIntermedio">   

               
       <div className="burger-logoPet">
           <div className="burger-menu">

               <button type="submit" className="botonBurger"><i className="fas fa-bars fa-2x"></i></button>
   
           </div>      
           
           <Link to ="/"><img className="logoCachogoPetShop" src={image} alt="Logotipo Cachgos Pet Shop"/></Link>
       </div>
                

       <div className="input-searchIcon"> 

          <input type="text" name="buscar" className="textoBuscarEnBarra" placeholder="Buscar..."/>
               
          <button className="botonSearch-Desktop" type="submit"><i className="fa-solid fa-magnifying-glass botonSearchDektop"></i></button>
         
       </div>
     
                          
       <ul className = "logosMargenDerecho">

            <li><a className="logo-wapp-desktop" href="aaaaa.html"><i className="fa-brands fa-whatsapp"></i></a></li>
            <li><a className="iconoBuscarMargenDerecho" href="aaaaa.html"><i className="fa-solid fa-magnifying-glass"></i></a></li>
            <ul className="iconoUserRegistrarse">
                <li><a className="iconoUserMargenDerecho" href="/users/login"><i className="fa-solid fa-user"></i></a></li>
                <li><a className="IniciarSesion" href="/users/login">Iniciar Sesión/</a></li>
                <li><a className="Registrarse" href="/users/register">Registrarse</a></li>    
            </ul>
              
        </ul>
    
                     

   </div>

   <nav className="contenedorInferior"> 
   
       <ul className="leftBottomHeader">

           <li><Link className="productos" to ="/ProductsListCompleto">Productos</Link></li>
           <li><Link className="productos" to ="/">Estadísticas</Link></li>
           
       </ul>

       <ul className="rigthBottomHeader">

           <li ><a className="Inicio" href="/">Inicio</a></li>
           <li ><a className="Ofertas" href="Ofertas.html">Ofertas</a></li>
           <li ><a className="Blog" href="Blog.html">Blog</a></li>
           <li ><a className="Sucursales" href="Sucursales.html">Sucursales</a></li>
           <li ><a className="Contacto" href="Contacto.html">Contacto</a></li>
       
       </ul>                                    

   </nav>

  

</header >
            <Switch>
                <Route exact path="/">{App}</Route>
                <Route path="/ProductsListCompleto">{ProductsListCompleto}</Route>
                {/* <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>

                <Route path="/SearchMovies" component = {SearchMovies} />
                
                <Route component={NotFound} /> */}
            </Switch>

    </React.Fragment>
)
}
export default TopBar;