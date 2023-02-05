import React from 'react'
import TopBar from './TopBar';
import Footer from './Footer';

function App() {
  return (
    
    <React.Fragment>
         
      <TopBar/>  
      <Footer/>  

      {/* TopBar y Footer quedan fijos en la pagina. Primero se lee el TopBar, donde estan definidas las rutas. */}
      
    </React.Fragment>
  )
}

export default App;
