import React from 'react'
import atencionAlCliente from '../images/atencionAlCliente.jpg'

const Contacto = () => {
    return (
      <div>
        <hr />
        {/* Informacion */}
        <section className="container">
          <div className="d-flex justify-content-center align-items-center p-4">
            <div>
              <h2 className="text-center correos">Atención al Viajero</h2>
              <h3 className="subTexto">Te ayudamos siempre que te haga falta</h3>
            </div>
          </div>
          <div>
            <hr />
            <div>
              <p>Ponemos a tu servicio nuestro Centro de Atención al Viajero, un vínculo directo, personal y permanente para ayudarte cuando te haga falta.</p>
              <p>Todos los procesos de reserva son supervisados y gestionados por Asesores de Viajes especializados que te ayudarán y proporcionarán cualquier aclaración sobre el viaje que necesites.</p>
              <p>Para todo esto, ponemos a tu disposición nuestros canales sociales Facebook y Twitter y el teléfono exclusivo 900 80 20 20 para viajeros de Internet, en los que daremos asistencia a tus necesidades de forma inmediata.</p>
              <p>A través de estos medios puedes consultarnos cualquier aspecto referente a tu viaje, acordar la forma de pago o hacernos llegar tus sugerencias para que podamos seguir mejorando.</p>
              <h6>Gracias por tu confianza</h6>
            </div>
            <hr />
          </div>
        </section>
  
        {/* Formulario */}
        <section className="container pt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6">
              <h3>Formulario de contacto</h3>
              <form action="#" method="post">
                <div className="mb-2">
                  <input className="form-control rounded-1" type="text" name="nombre" id="nombre" placeholder="Nombre" required />
                </div>
                <div className="mb-2">
                  <input className="form-control rounded-1" type="email" name="email" id="email" placeholder="Email" required />
                </div>
                <div className="mb-2">
                  <input className="form-control rounded-1" type="text" name="asunto" id="asunto" placeholder="Asunto" required />
                </div>
                <div className="mb-2">
                  <textarea className="form-control" name="comentarios" rows="4" placeholder="Mensaje"></textarea>
                </div>
                <div className="pt-3">
                  <button type="submit" className="btn btn-danger">ENVIAR MENSAJE</button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img src={atencionAlCliente} alt='Atención al Cliente' className="img-fluid" />
              <div className="pt-3">
                <h6>Llámanos</h6>
              </div>
              <div>
                <h6>Nacionales</h6>
                <h5>900 80 20 20</h5>
                <h6>De Lunes a Viernes de 9:30 a 19:30h</h6>
              </div>
              <div>
                <h6>Email de atención al viajero:</h6>
                <h6 className="correos">centrorelacionclientes@halconviajes.com</h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Contacto;