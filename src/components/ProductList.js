import React from 'react';
import '../assets/css/style.css';
import ProdListCards from './ProdListCards';
import {useEffect, useState} from 'react';
// import image from '../assets/images/gato-puch-promo.jpg';
import '../assets/css/cardStyles.css';

// let prod1INDB = {
//     image: image,
//     name: 'Camas e Indumentaria',
//     price: 'primary',
    
// }

// let prod2INDB = {
//     image: image,
//     name: 'Camas e Indumentaria',
//     price: 'primary',
    
// }

// let prod3INDB = {
//     image: image,
//     name: 'Camas e Indumentaria',
//     price: 'primary',
// }

// let prod4INDB = {
//     image: image,
//     name: 'Camas e Indumentaria',
//     price: 'primary',
// }

// let prod5INDB = {
//     image: image,
//     name: 'Camas e Indumentaria',
//     price: 'primary',
// }

// let prod6INDB = {
//     image:image,
//     name: 'Camas e Indumentaria',
//     price: 'primary',
    
// }

// let prod7INDB = {
//     image: image,
//     name: 'Camas e Indumentaria',
//     price: 'primary',
    
// }

// let prod8INDB = {
//     image: image,
//     name: 'Camas e Indumentaria',
//     price: 'primary',
    
// }

// let prod9INDB = {
//     image: image,
//     name: 'Camas e Indumentaria',
//     price: 'primary',
// }

// let prod10INDB = {
//     image: image,
//     name: 'Camas e Indumentaria',
//     price: 'primary',
// }

// let prod11INDB = {
//     image: image,
//     name: 'Camas e Indumentaria',
//     price: 'primary',
// }

// let prod12INDB = {
//     image:image,
//     name: 'Camas e Indumentaria',
//     price: 'primary',
    
// }

// let prodListProps = [prod1INDB, prod2INDB, prod3INDB, prod4INDB, prod5INDB, prod6INDB,prod7INDB, prod8INDB, prod9INDB, prod10INDB, prod11INDB, prod12INDB]


function ProductList(){

    const [product, setProduct] = useState([])
    
    useEffect( () => {   // npm i cors  INSTALADO EN TERMINAL DEL BACKEND PARA QUE FUNCIONE EL FETCH DE LA API Y SE VEA POR NAVEGADOR LOS RESULTADOS.
        fetch("http://localhost:4000/api/products")
        .then(response => response.json())
        .then(product => {

            setProduct(JSON.parse(JSON.stringify(product.products)))

        })
        .catch(error => console.log(error))

    }, [])


    return(
        <React.Fragment>
  
<link rel="stylesheet" href="/css/style-home.css"/>

<link rel="stylesheet" href="/css/style_Product.css"/>

<link rel="icon" type="image/png" href="/img/LOGO-PETSHOP.png"/>


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>


<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"/>

    <link rel="stylesheet" href="styles.css"/>
    <link rel="stylesheet" href="/css/styleProductList.css"/>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   
<body>
  
    <main class="mainProductList1">
                    
        <section class="cards"> 


            <div className="categoriasProd">
                <h4 className="tituloListadoProd">LISTADO DE PRODUCTOS</h4>
                <div className="ProdCardsRow">
                    {product.map( (produ, i) => {

                        return <ProdListCards {...produ} key={i}/>
                    
                    })}

                </div>
            </div>

          
                    {/* <% for( let productLis of productlist ) { %>
                <div class="card">    
                    <a href="/products/detail/<%= productLis.sku %>">
                    
                    <img src="/images/<%= productLis.products_images[0].image %> " alt="imagen"> 
                    <p class=" card__productName"> <%= productLis.name %>  </p>  
                    <p class=" card__productPrice"> $ <%= productLis.cost != 0 ? productLis.cost : productLis.foods[0].cost_x_bag %> </p>
                    <p class=" card__productCuota"> Hasta <%= productLis.quotesQuantity != 0 ? productLis.quotesQuantity : productLis.foods[0].quotesQuantity %> cuotas sin interes de $ <%= productLis.quotesQuantity != 0 ? (productLis.cost)/(productLis.quotesQuantity) : (productLis.foods[0].cost_x_bag)/(productLis.foods[0].quotesQuantity) %> con Bancos seleccionados</p>
                                     
                    </a>
                </div>
            <% } %>  */}
                  
        </section>
    
    </main>

</body>

</React.Fragment>
)
}
export default ProductList;