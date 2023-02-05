import React from 'react';
import '../assets/css/style.css';
// import {Link, Route, Switch} from 'react-router-dom';


function ProductList(){
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
  
    <main class="mainProductList">
        <aside>

            <form class="activeForm">
                <div class="filters">
                    <h2>filtrado por: </h2>
                    <label for="filtro"> Alimento </label>
                    <input type="checkbox"/>
                </div>

                <div class="filters">
                    <p><label for="departamento" class="filters__titles">Departamento</label></p>
                    <p><label for="filtro" id="departamento" name="gato" value="gato"> Gato </label>
                        <input type="checkbox"/>
                    </p>
                    <p> <label for="filtro" id="departamento" name="perro" value="perro"> Perro </label>
                        <input type="checkbox"/>
                    </p>

                </div>

                <div class="filters">
                    <p><label for="departamento" class="filters__titles">Categoria</label></p>
                    <p><label for="filtro" id="departamento" name="gato" value="gato"> Categoria 1 </label>
                        <input type="checkbox"/>
                    </p>
                    <p> <label for="filtro" id="departamento" name="perro" value="perro"> Categoria 2 </label>
                        <input type="checkbox"/>
                    </p>

                    <p> <label for="filtro" id="departamento" name="perro" value="perro"> Categoria 3 </label>
                        <input type="checkbox"/>
                    </p>

                </div>

                <div class="filters">
                    <p><label for="departamento" class="filters__titles">Marca</label></p>
                    <p><label for="filtro" id="departamento" name="gato" value="gato"> Marca 1 </label>
                        <input type="checkbox"/>
                    </p>
                    <p> <label for="filtro" id="departamento" name="perro" value="perro"> marca 2 </label>
                        <input type="checkbox"/>
                    </p>

                    <p><label for="filtro" id="departamento" name="gato" value="gato"> Marca 3 </label>
                        <input type="checkbox"/>
                    </p>
                    <p> <label for="filtro" id="departamento" name="perro" value="perro"> marca 4 </label>
                        <input type="checkbox"/>
                    </p>

                </div>

                <div class="filters">
                    <p><label for="departamento" class="filters__titles">Edad</label></p>
                    <p><label for="filtro" id="departamento" name="gato" value="gato"> Cachorro </label>
                        <input type="checkbox"/>
                    </p>
                    <p> <label for="filtro" id="departamento" name="perro" value="perro"> Senior </label>
                        <input type="checkbox"/>
                    </p>

                    <p><label for="filtro" id="departamento" name="gato" value="gato"> Adulto</label>
                        <input type="checkbox"/>
                    </p>
                

                </div>


            </form>

            <div class="activeFormMobile">
                <span> Filtrar por : </span>

            </div>
        </aside>
            
        <section class="cards"> 
            
          
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