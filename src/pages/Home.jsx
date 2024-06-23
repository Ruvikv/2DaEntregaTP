import React from 'react'
import Buscador from '../form/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Home = () => {
  return (

<div>

{/* Carrusel imagenes */}

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('../images/portada1.jpg')} className="d-block w-100" alt="portadaUno"/>
          </div>
          <div className="carousel-item">
            <img src={require('../images/portada2.jpg')} className="d-block w-100" alt="portadaDos"/>
          </div>
          <div className="carousel-item">
            <img src={require('../images/portada3.jpg')} className="d-block w-100" alt="portadaTres"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
{/* Barra buscadora Blanca */}

        <main className="p-xl-5 container text-center p-3">
            <section className="container text-center">
                <div className="container text-center bg-white col-lg-7 col-md-10 p-sm-2 rounded-4">
                    <div className="row justify-content-start">
                        <div className="col-12 col-md-4 col-lg-4 mb-3">
                            <div className="d-flex align-items-center list-unstyled">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" width="21" height="21" viewBox="0 0 29.91 29.91">
                                    <path d="M23.73,14.21v0a1.82,1.82,0,0,0-.05.23h0a8.91,8.91,0,0,1-.6,1.76,0,0,0,0,0,0,0c-1,2.4-3.23,6-8,10-4.82-4-7-7.62-8-10,0,0,0,0,0,0a8.91,8.91,0,0,1-.6-1.76h0a1.65,1.65,0,0,1,0-.23s0,0,0,0a9.47,9.47,0,0,1-.16-1.68,8.87,8.87,0,1,1,17.73,0,8.64,8.64,0,0,1-.16,1.69M15,2.2A10.34,10.34,0,0,0,4.7,12.52a9.74,9.74,0,0,0,.19,1.94,2.12,2.12,0,0,0,.07.35,9.92,9.92,0,0,0,.69,2c1.11,2.62,3.56,6.64,8.92,11A.74.74,0,0,0,15,28a.72.72,0,0,0,.46-.16c5.36-4.31,7.81-8.33,8.93-10.95a10.34,10.34,0,0,0,.69-2l.07-.35a10.53,10.53,0,0,0,.18-1.94A10.35,10.35,0,0,0,15,2.2Z" className="colorLoguitos"></path>
                                    <path d="M15,17.73a5.1,5.1,0,1,1,5.09-5.09A5.1,5.1,0,0,1,15,17.73M15,6.08a6.56,6.56,0,1,0,6.55,6.56A6.57,6.57,0,0,0,15,6.08Z" className="colorLoguitos"> a donde vas</path>
                                </svg>
                                <li>¿A Donde Vas?</li>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 mb-3">
                            <div className="d-flex list-unstyled align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" width="21" height="21" viewBox="0 0 29.91 29.91">
                                    <path d="M23.73,14.21v0a1.82,1.82,0,0,0-.05.23h0a8.91,8.91,0,0,1-.6,1.76,0,0,0,0,0,0,0c-1,2.4-3.23,6-8,10-4.82-4-7-7.62-8-10,0,0,0,0,0,0a8.91,8.91,0,0,1-.6-1.76h0a1.65,1.65,0,0,1,0-.23s0,0,0,0a9.47,9.47,0,0,1-.16-1.68,8.87,8.87,0,1,1,17.73,0,8.64,8.64,0,0,1-.16,1.69M15,2.2A10.34,10.34,0,0,0,4.7,12.52a9.74,9.74,0,0,0,.19,1.94,2.12,2.12,0,0,0,.07.35,9.92,9.92,0,0,0,.69,2c1.11,2.62,3.56,6.64,8.92,11A.74.74,0,0,0,15,28a.72.72,0,0,0,.46-.16c5.36-4.31,7.81-8.33,8.93-10.95a10.34,10.34,0,0,0,.69-2l.07-.35a10.53,10.53,0,0,0,.18-1.94A10.35,10.35,0,0,0,15,2.2Z" className="colorLoguitos"></path>
                                    <path d="M15,17.73a5.1,5.1,0,1,1,5.09-5.09A5.1,5.1,0,0,1,15,17.73M15,6.08a6.56,6.56,0,1,0,6.55,6.56A6.57,6.57,0,0,0,15,6.08Z" className="colorLoguitos"> a donde vas</path>
                                </svg>
                                <li>Salimos desde..</li>
                            </div>
                        </div>
                        <div className="col-12 col-md-1 col-lg-3 mb-3 ">
                            <div className="d-flex list-unstyled align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" width="20.6413" height="21.22826" viewBox="0 0 20.6413 21.22826">
                                    <path d="M16.872,16.91967a.82522.82522,0,0,1-.82483.8247H4.49626a.826.826,0,0,1-.8252-.8247V9.49389H16.872ZM3.67106,5.781a.82679.82679,0,0,1,.8252-.8252h1.65v.4126a.82516.82516,0,0,0,1.65027,0V4.9558h4.95026v.4126a.82515.82515,0,0,0,1.65026,0V4.9558h1.65009a.82605.82605,0,0,1,.82483.8252V7.8435H3.67106Zm12.3761-2.4751H14.39707V2.8933a.82515.82515,0,1,0-1.65026,0v.4126H7.79655V2.8933a.82717.82717,0,0,0-.06116-.31738.82793.82793,0,0,0-.447-.4502.82359.82359,0,0,0-.63409,0,.82594.82594,0,0,0-.508.76758v.4126h-1.65A2.47729,2.47729,0,0,0,2.0211,5.781V16.91967a2.47731,2.47731,0,0,0,2.47516,2.47461h11.5509a2.478,2.478,0,0,0,2.47522-2.47461V5.781a2.478,2.478,0,0,0-2.47522-2.4751Z" className="colorLoguitoCalendario"></path>
                                    <path d="M6.559,12.79369a.825.825,0,1,0-.82513-.82471.82474.82474,0,0,0,.82513.82471" className="colorLoguitoCalendario"></path>
                                    <path d="M10.27159,12.79369A.825.825,0,1,0,9.4467,11.969a.82474.82474,0,0,0,.82489.82471" className="colorLoguitoCalendario"></path>
                                    <path d="M13.98436,12.79369a.825.825,0,1,0-.8249-.82471.82484.82484,0,0,0,.8249.82471" className="colorLoguitoCalendario"></path>
                                    <path d="M6.559,16.09447a.8252.8252,0,1,0-.82513-.82568.82526.82526,0,0,0,.82513.82568" className="colorLoguitoCalendario"></path>
                                    <path d="M10.27159,16.09447a.8252.8252,0,1,0-.82489-.82568.82526.82526,0,0,0,.82489.82568" className="colorLoguitoCalendario"></path>
                                    <path d="M13.98436,16.09447a.8252.8252,0,1,0-.8249-.82568.82536.82536,0,0,0,.8249.82568" className="colorLoguitoCalendario"></path>
                                </svg>
                                <li>Mes del viaje</li>
                            </div>
                        </div>                   
                    </div>
                    <div className="row w-100">
                        <div className="col-12 col-md-4 mb-3">
                            <select className="form-select rounded-3">
                                <option value>Elegir</option>
                                <option value="Caba">Capital Federal</option>
                                <option value="Buenos Aires">Bs. As.</option>
                                <option value="Catamarca">Catamarca</option>
                                <option value="Chaco">Chaco</option>
                                <option value="Chubut">Chubut</option>
                                <option value="Cordoba">Cordoba</option>
                                <option value="Corrientes">Corrientes</option>
                                <option value="Entre Rios">Entre Rios</option>
                                <option value="Formosa">Formosa</option>
                                <option value="Jujuy">Jujuy</option>
                                <option value="La Pampa">La Pampa</option>
                                <option value="La Rioja">La Rioja</option>
                                <option value="Mendoza">Mendoza</option>
                                <option value="Misiones">Misiones</option>
                                <option value="Neuquen">Neuquen</option>
                                <option value="Rio Negro">Rio Negro</option>
                                <option value="Salta">Salta</option>
                                <option value="San Juan">San Juan</option>
                                <option value="San Luis">San Luis</option>
                                <option value="Santa Cruz">Santa Cruz</option>
                                <option value="Santa Fe">Santa Fe</option>
                                <option value="Sgo. del Estero">Sgo. del Estero</option>
                                <option value="Tierra del Fuego">Tierra del Fuego</option>
                                <option value="Tucuman">Tucuman</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <select className="form-select rounded-3">
                                <option value>Elegir</option>
                                <option value="Bahia Blanca">Bahia Blanca</option>
                                <option value="Punta Alta">Punta Alta</option>
                                <option value="Viedma">Viedma</option>
                                <option value="Ruta 35">Ruta 35</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <select className="form-select rounded-3">
                                <option value>Elegir</option>
                                <option value="Enero">Enero</option>
                                <option value="Febrero">Febrero</option>
                                <option value="Marzo">Marzo</option>
                                <option value="Abril">Abril</option>
                                <option value="Mayo">Mayo</option>
                                <option value="Junio">Junio</option>
                                <option value="Julio">Julio</option>
                                <option value="Agosto">Agosto</option>
                                <option value="Septiembre">Septiembre</option>
                                <option value="Octubre">Octubre</option>
                                <option value="Noviembre">Noviembre</option>
                                <option value="Diciembre">Diciembre</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3 justify-content-center align-items-center pb-2">
                    <Buscador/>
                    </div>
                </div>
            </section>
        </main>


{/*       <!-- Comentario --> */}

    <section className="container">
        <div className="py-lg-4 ">
          <div className="text-md-center cardFooterColor row p-sm-1 ">
            <h2 className=" cardFooterColor col col-md-5 ">Los Mas Destacado!</h2>
          </div>
        </div>
      </section>

{/*       <!-- TARJETAS --> */}

      <section className="container">
        <div className="card-group pt-2">
          <div className="card">
            <img src={require('../images/card1.jpg')} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">VIETNAM, 9 días</h5>
              <p className="card-text">Vietnam desde Barcelona.</p>
            </div>
            <div className="card-footer cardFooterColor">
              <small className="text-body-primary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
    </section>

{/*       <!-- PREGUNTAS FRECUENTES  -->  */}

      <section className="py-lg-5 container">
        <div className="text-md-center py-lg-4 cardFooterColor row align-items-center ">
          <div className="col col-md-6">
            <h2 className="">Preguntas frecuentes para mi,</h2>
            <h2 className="col-md-10">para vos, para todos!</h2>
          </div>
          <div className="col">
            <button type="button" className="rounded-3 px-5 btn btn-success ">Ver Mas</button>
        </div>
        </div>
      </section>


{/*       <!-- Proximas Salidas --> */}

      <section className="container">
        <div className="pb-4">
          <div className="text-md-start row p-sm-1">
            <h2 className="col-md-4 colorSalidas">Próximas salidas!</h2>
          </div>
        </div>
      </section>
      

{/*       <!-- Tarjetas Inferiores --> */}

      <section className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={require('../images/imagen1Cards2.jpg')} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Buenos Aires</h5>
                <h5 className="card-text colorSalida" >$134.900</h5>
                <a href="." className="btn btn-primary">Reservar</a>
              </div>
            </div>
          </div>
        </div>
      </section>


</div>

  );
}

export default Home