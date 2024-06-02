import React from 'react'

const AgenciaDeViajes = () => {
  return (
<div>

{/* <!-- Divisor de color --> */}
    
    <div className="cardFooterColor">
        <br />
    </div>
    
{/* <!-- IMPUT Y MAPA --> */}

    <section>
        <div className="justify-content-evenly">
            <div className="d-flex justify-content-center">
                <div className="container pt-3 col">
                    <div>
                        <h2 className="textoLocalizarOficina">Localice su oficina más cercana</h2>
                    </div>
                    <div className="pt-3">
                        <input className="rounded-1 form-control" type="text" id="codigoPostal" name="codigoPostal" placeholder="Codigo Postal" required />
                    </div>
                    <div className="pt-3">
                        <hr className="correos" />
                        <p className="colorFondoAgencia">No se pueden localizar, por favor permita la localización de su navegador para poder ver las oficinas más cercanas.</p>
                    </div>
                    <div className="pt-3">
                        <button type="button" className="btn btn-danger ">Localizar Oficina Mas Cercana</button>
                    </div>
                </div>
                <div className="pt-3 col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14464.011449898959!2d-71.0102997368804!3d25.000018692767135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89451ab5034cb7ab%3A0xb600ecf3df7aca4d!2sBermuda%20Triangle!5e0!3m2!1sen!2sar!4v1714738841241!5m2!1sen!2sar"
                        width="800" height="600" allowfullscreen="" loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>


{/* <!-- Divisor de color --> */}
    
    <section className="cardFooterColor p-2">
        <div className="d-flex justify-content-start align-items-center ms-4">
            <div className="col">
                <h3>Directorio de Agencias</h3>
            </div>
            <div className="col col-md-9">
                <button type="button" className="btn btn-danger rounded-5 px-4">Ver Listado</button>
            </div>
        </div>
    </section>


{/* <!--  SOBRE NOSOTROS  --> */}

    <section>
        <div className="pt-3 ">
            <div className="d-flex justify-content-center align-items-center">
                <div className="col col-4">
                    <h4 className="textoSomos">Somos</h4>
                    <h4 className="colorSalida">I In DW SRL</h4>
                    <a href="."><p>Términos y condiciones</p></a>
                    <a href="."><p>Política de privacidad</p></a>
                    <a href="."><p>Póliza de insolvencia</p></a>
                    <a href="."><p>Notas Importantes</p></a>
                    <a href="."><p>Franquicias con DW SRL</p></a>
                </div>
                <div>
                    <h4>¡Síguenos!</h4>
                    <div className="py-3">
                        <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/facebook-new.png" alt="facebook-new"/>
                        <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/instagram-circle.png" alt="instagram-circle"/>
                        <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/twitter-circled--v1.png" alt="twitter-circled--v1"/>
                        <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/linkedin-circled--v1.png" alt="linkedin-circled--v1"/>
                        <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/youtube--v2.png" alt="youtube--v2"/>
                    </div>
                    <div>
                        <p>Llámanos al 900 80 20 20</p>
                        <p>De Lunes a Viernes de 9:30 a 19:30h</p>
                        <p>Email de atención al viajero:</p>
                        <p>centrorelacionclientes@halconviajes.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
  )
}

export default AgenciaDeViajes