import React from 'react'
import TopBar from './TopBar';
import Footer from './Footer';

function App() {
  return (
    
    <React.Fragment>
         
      <TopBar/> 
      <Footer/>  

      {/* TopBar y Footer quedan fijos en la pagina. Primero se lee el TopBar, donde estan definidas las rutas. */}
      
      {/* Como 'TopBar tiene definida la ruta siguiente, imprime por pantalla ademas del header, el componente 'Main' al cargarse la pagina.->  <Route exact path = "/"><MainContent/></Route> */}
      
    </React.Fragment>
  )
}

export default App;
