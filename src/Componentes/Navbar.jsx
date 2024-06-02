import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logopequeño.png'

export const Navbar = () => {

return (

<header>
    <section>
        <div className="margenSuperior "></div>
    </section>
    <nav className="navbar navbar-expand-lg colorNav">
        <div className="container">
            <Link to='/'>
                <img src={Logo} alt="" width="80px" height="80px"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0  w-100 justify-content-end gap-md-3">
                    <li className="nav-item">
                        <Link className="nav-link fs-5 active" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-5 active" to="/Contacto">Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-5 active" to='/AgenciaDeViajes'>Agencia de Viajes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-5 active" to='/Administracion'>Administracion</Link>
                    </li>
                </ul>
                <form className="d-flex px-4" role="search">
                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                <button type="button" className="rounded-3 px-4 btn btn-success">Buscar</button>
                </form>
            </div>
            </div>
        </nav>
    </header>
);
}


export default Navbar