import React from 'react';
import image from '../assets/images/Logo7 color sec 1.png';
import imageInsta from '../assets/images/INSTA.png';
import imageFb from '../assets/images/FB.png';
import imageYouTube from '../assets/images/YTUBE.png';
import imageVISA from '../assets/images/VISA.png';
import imageAMEX from '../assets/images/AMEX (1).png';
import imageMP from '../assets/images/MP.png';
import imageDF from '../assets/images/dataFiscal.png';

import '../assets/css/style.css';

function Footer(){
    return(
        <React.Fragment>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"></link>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>
 
            <footer>

                <div className="newsLetter">

                    <section className="mobile">

                        <h4>Registrate y recibí nuestras novedades!</h4>

                        <input type="email" className="registrarseNewsletter-mobile" placeholder="Tu e-mail..."/>

                            <button type="submit" className="BotonSuscribite">Suscribite</button>

                    </section>

                    <section className="desktop">

                        <div className="envolope-Frase">
                            <i className="fa-solid fa-envelope iconoMensaje"></i>
                            <p>Registrate y recibí nuestras novedades!</p>
                        </div>

                        <div className="barraSuscribirse-BotonRegistrarse">
                            <input type="email" className="registrarseNewsletter" placeholder="Tu e-mail..."/>

                                <button type="submit" className="botonSuscribirse">Suscribite</button>

                        </div>
                    </section>

                </div>

                <div className="footerIntermedio-mobile">


                    <a href="Inicio.html"><img className="logoCachogoPetShop-footer" src={image}alt="Logotipo Cachgos Pet Shop"/></a>

                </div>


                <div className="footerInferior-mobile">


                    <ul className="footerInferior-links">


                        <div className="enlacesFooter-mobile">
                            <li ><a className="NOSOTROS" href="Inicio.html">NOSOTROS</a></li>
                            <li className="botonAmpliar-mobile">+</li>
                        </div>

                        <div className="enlacesFooter-mobile">
                            <li ><a className="CATERGORÍAS" href="Ofertas.html">CATERGORÍAS</a></li>
                            <li className="botonAmpliar-mobile">+</li>
                        </div>


                        <div className="enlacesFooter-mobile">
                            <li ><a className="INFORMACIÓN" href="Blog.html">INFORMACIÓN</a></li>
                            <li className="botonAmpliar-mobile">+</li>
                        </div>

                        <div className="enlacesFooter-mobile">
                            <li ><a className="FORMAS DE PAGO" href="Sucursales.html">FORMAS DE PAGO</a></li>
                            <li className="botonAmpliar-mobile">+</li>
                        </div>


                        <div className="enlacesFooterRedes-mobile">
                            <li ><a href="https://www.instagram.com/"><img className="Instagram" src={imageInsta} alt="Instagram"/></a></li>
                            <li ><a href="https://es-la.facebook.com/"><img className="Facebook" src={imageFb} alt="Facebook"/></a></li>
                            <li ><a href="https://www.youtube.com/"><img className="Youtube" src={imageYouTube} alt="Youtube"/></a></li>
                        </div>

                    </ul>


                </div>

                <div className="footerInferior-desktop">

                    <a href="Inicio.html"><img className="logoCachogoPetShop-footer" src={image} alt="Logotipo Cachgos Pet Shop"/></a>

                    <div className="links">

                        <ul className="listadoLinksNosotros">

                            <li><a className="Nosotros" href="Inicio.html">NOSOTROS</a></li>
                            <li><a className="QuienesSomos" href="Ofertas.html">Quienes somos</a></li>
                            <li><a className="Contacto" href="Blog.html">Contacto</a></li>
                            <li><a className="TrabajaConNosotros" href="Sucursales.html">Trabajá con nosotros</a></li>

                        </ul>

                        <ul className="listadoLinksCategorias">

                            <li ><a className="Categorías" href="Inicio.html">CATERGORÍAS</a></li>
                            <li ><a className="perros" href="Ofertas.html">Perros</a></li>
                            <li ><a className="gatos" href="Blog.html">Gatos</a></li>
                            <li ><a className="peces" href="Blog.html">Peces</a></li>
                            <li ><a className="aves" href="Blog.html">Aves</a></li>

                        </ul>

                        <ul className="listadoLinksInformacion">

                            <li ><a className="informacion" href="Inicio.html">INFORMACIÓN</a></li>
                            <li ><a className="delivery" href="Ofertas.html">Delivery</a></li>
                            <li ><a className="promocionesBancarias" href="Blog.html">Promociones bancarias</a></li>
                            <li ><a className="terminosYCondiciones" href="Blog.html">Términos y condiciones</a></li>

                        </ul>

                        <div className="listadoLinksSeguinos-FormasdePago">

                            <ul>
                                <li ><a className="redes" href="Inicio.html">SEGUINOS</a></li>
                                <div className="redesSociales">
                                    <li ><a href="Inicio.html"><img className="Instagram" src={imageInsta} alt="Instagram"/></a></li>
                                    <li ><a href="Ofertas.html"><img className="Facebook" src={imageFb} alt="Facebook"/></a></li>
                                    <li ><a href="Blog.html"><img className="Youtube" src={imageYouTube} alt="Youtube"/></a></li>
                                </div>
                            </ul>

                            <ul>
                                <li ><a className="formasDePago" href="Inicio.html">FORMAS DE PAGO</a></li>
                                <div className="tarjetas">
                                    <li ><a href="Inicio.html"><img className="visa" src={imageVISA} alt="Tarjeta VISA"/></a></li>
                                    <li ><a href="Blog.html"><img className="AmericanExpress" src={imageAMEX} alt="Tarjeta AMEX"/></a></li>
                                    <li ><a href="Blog.html"><img className="mercadoPago" src={imageMP} alt="MERCADO PAGO"/></a></li>
                                </div>
                            </ul>
                        </div>

                    </div>

                </div>



            </footer>

            <aside>


                <div className="socalo-mobile">

                    <a href="https://www.afip.gob.ar/960/formulario-960/concepto.asp"><img className="dataFiscal-mobile" src="/img/dataFiscal.png" alt="Data Fiscal"/></a>
                    <div className="infoSocalo">
                        <li >© 2022 - Cachogos Pet Shop - Todos los derechos reservados</li>

                    </div>


                </div>

                <div className="socalo-desktop">

                    <a href="https://www.afip.gob.ar/960/formulario-960/concepto.asp"><img className="dataFiscal-desktop" src= {imageDF} alt="Data Fiscal"/></a>
                    <div className="infoSocalo">
                        <li >© 2022 - Cachogos Pet Shop - Todos los derechos reservados</li>

                    </div>
                </div>

            </aside>


</React.Fragment >
)
}
export default Footer;