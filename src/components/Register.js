import React from 'react';
import '../assets/css/styleLogin.css';


function Register() {
    return (
        <React.Fragment>

            <body>


                <main>

                    <h2 class="titulo-main">Crear mi cuenta</h2>


                    <form action="/users/register" class="formuRegister" id="" method="post" enctype="multipart/form-data">
                        <div class="campos-form">


                            <div class="nombre" id="">
                                <label for="nombre" class="nameLabel">Nombre</label>
                                <div class="nameInput-i">
                                    <input type="text" class="nameInput" name="nombre" id="nombre" placeholder="example John" />
                                    <div class="nameIcon">
                                        <i class="fa-solid fa-circle-xmark"></i>
                                    </div>
                                </div>
                                <p class="error-name">El nombre tiene que ser de 2 a 16 carácteres, no debe incluir numeros ni
                                            simbolos.</p>
                            </div>

                            <div class="apellido" id="">
                                <label for="apellido" class="lastnameLabel">Apellido</label>
                                <div class="lastnameInput-i">
                                    <input type="text" class="lastnameInput" name="apellido" id="apellido"
                                               placeholder="example Travolta" />
                                    <div class="lastnameIcon">
                                        <i class="fa-solid fa-circle-xmark"></i>
                                    </div>
                                </div>
                                <p class="error-lastname">El apellido tiene que ser de 2 a 16 carácteres, no debe incluir numeros ni
                                            simbolos.</p>
                            </div>

                            <div class="email" id="">
                                <label for="email" class="mailLabel">E-mail</label>
                                <div class="mailInput-i">
                                    <input type="text" class="mailInput" name="email" id="email" placeholder="correo@correo.com" />
                                    <div class="mailIcon">
                                        <i class="fa-solid fa-circle-xmark"></i>
                                    </div>
                                </div>
                                <p class="error-email">El email tiene que ser un formato de mail valido.</p>
                            </div>

                            <div class="Image" id="">
                                <label for="image" class="imageLabel">Imagen de perfil</label>
                                <div class="imageInput-i">
                                    <input type="file" class="imageInput" name="image" id="image" />
                                    <div class="imageIcon">
                                        <i class="fa-solid fa-circle-xmark"></i>
                                    </div>
                                </div>
                                <p class="error-image">Solo puede cargar una imagen.</p>
                            </div>



                            <div class="contraseña" id="">
                                <label for="password" class="contraLabel">Contraseña</label>
                                <div class="contraInput-i">
                                   <input type="password" class="contraInput" name="password" id="password" placeholder="********" />
                                   <div class="contraIcon">
                                        <i class="fa-solid fa-circle-xmark"></i>
                                   </div>
                                </div>
                                <p class="error-password">La contraseña tiene que ser de 8 a 16 carácteres, debe incluir minimamente
                                    mayúscula, minúscula y número.</p>
                            </div>

                            <div class="archivos">
                                <div class="imagen-producto">
                                    <label for="imagenProducto">Imagen</label>
                                    <div class="imgProd">
                                        <input type="file" name="imagen" id="imagenProducto" multiple />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="terminos" id="">
                            <label for="terminos" class="terminosLabel"></label>
                            <input type="checkbox" class="checkInput" name="terminos" id="terminos" />
                            <p>Acepto los Terminos y Condiciones</p>
                        </div>
                        <div class="error-formulario" id="">
                            <p class=""><b>Error:</b> Por favor rellena el formulario correctamente.</p>
                        </div>
                        <div class="boton-registro">
                            <button type="submit" class="boton">Registrarme</button>
                        </div>


                    </form>

                </main>

  
            </body >


        </React.Fragment >
        )
}
export default Register;