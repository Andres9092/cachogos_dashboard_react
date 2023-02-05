import React from 'react'
import TopBar from './TopBar';
import ProductList from './ProductList';
import Footer from './Footer';

function ProductsListCompleto() {
  return (

    <React.Fragment>
    <div >
      
      <TopBar/> 
      <ProductList/>  
      <Footer/> 
       
       
    </div>
    </React.Fragment>
  );
}

export default ProductsListCompleto;
