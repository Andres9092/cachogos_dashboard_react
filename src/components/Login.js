import React from 'react';
import '../assets/css/styleLogin.css';

  
function Login(){
    return(
        <React.Fragment>

<body>
   

    <main className ="loginMain">
        <h2>Ingresar a mi cuenta</h2>       


        <form action="/users/login" className="formuLogin" id="" method="POST">  

            <div className="campos-form">
               
        <div className="email" id="">
            <label for="email" className="mailLabel">E-mail</label>
            <div className="mailInput-i">
                <input type="email" className="mailInput" name="email" id="email" placeholder="correo@correo.com"/>
                <div className="mailIcon">
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>
            </div>
            <p className="error-email">El email tiene que ser un formato de mail valido.</p>
        </div>
       
        <div className="contraseña" id="">
            <label for="password" className="contraLabel">Contraseña</label>
            <div className="contraInput-i">
                <input type="password" className="contraInput" name="password" id="password" placeholder="********"/>
                <div className="contraIcon">
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>
            </div>
            </div>
         
            <p className="error-password">La contraseña tiene que ser de 8 a 16 carácteres, debe incluir minimamente mayúscula, minúscula y número.</p>
        </div>

        <div className="contraseña" id="">
            <label for="recordame">Recordame</label>
            <input type="checkbox" name="recordame"/>
        </div>


        {/* <a href="/">¿Olvidaste tu contraseña?</a> */}
        <div className="boton-inicio-sesión">
            <button type="submit" className="boton">Iniciar Sesión</button>
        </div>
        <div className="error-formulario" id="">
            <p className=""><b>Error:</b> Por favor rellena los campos correctamente.</p>
            </div>
            <div className="separador-login">
                <p>---------------------</p>
            </div>
            <div className="link-registro">
                <a href="/users/register">¿Todavía no ténes una cuenta?<br/>
                    <b>Registrarme</b>
                </a>
            </div>
       </form>
        
     </main>

  
</body>


</React.Fragment>
)
}
export default Login;