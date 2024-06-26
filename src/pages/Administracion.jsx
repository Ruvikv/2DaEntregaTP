import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'


const Administracion = () => {
  
  const [alojamientosFiltrados, setAlojamientosFiltrados] = useState([]);
  const [tiposAlojamiento, setTiposAlojamiento] = useState({});


  
    const filterTipoAlojamiento = async (idAlojamiento) => {
      try {
        const response = await fetch(`http://localhost:3001/tiposAlojamiento/getTipoAlojamiento/${idAlojamiento}`, {
          method: 'GET',
        });
        if (response.ok) {
          const data = await response.json();
          return data.Descripcion;
        }
      } catch (error) {
        console.error('Error fetching tipo alojamiento:', error);
      }
      return null;
    };
  
    useEffect(() => {
      const fetchTiposAlojamiento = async () => {
        const tipos = {};
        for (const alojamiento of alojamientosFiltrados) {
          const descripcion = await filterTipoAlojamiento(alojamiento.TipoAlojamiento);
          tipos[alojamiento.TipoAlojamiento] = descripcion;
        }
        setTiposAlojamiento(tipos);
      };
  
      fetchTiposAlojamiento();
    }, [alojamientosFiltrados]);



    
  useEffect(() => {
    const fetchAlojamientos = async () => {
      try {
        const response = await fetch("http://localhost:3001/alojamiento/getAlojamientos");
        if (response.ok) {
          const data = await response.json();
          setAlojamientosFiltrados(data.filter(alojamiento => alojamiento.Estado === 'Disponible'));
        } else {
          console.error("Error al obtener alojamientos.");
        }
      } catch (error) {
        console.error("Error al conectarse con la API:", error);
      }
    };
    fetchAlojamientos();
  }, []);


  return ( 
    <div>
      <div className="p-4 d-flex flex-column flex-md-row justify-content-center gap-3 gap-md-5">
        <Link to='/Alojamiento'>
          <button className="shadow__btn">Alojamiento</button>
        </Link>
        <Link to='/AltaImagenes'>
          <button className="shadow__btn3">Alta Imagenes</button>
        </Link>                     
        <Link to='/TipoAlojamiento'>
          <button className="shadow__btn2">Tipo Alojamiento y Servicios</button>
        </Link>
      </div>
      <div className="container">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Alojamiento</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Latitud</th>
                <th scope="col">Longitud</th>
                <th scope="col">Precio Por Dia</th>
                <th scope="col">Cantidad de Dormitorios</th>
                <th scope="col">Cantidad de Baños</th>
                <th scope="col">Estado</th>
                <th scope="col">Tipo de Alojamiento</th>
              </tr>
            </thead>
            <tbody>
              {alojamientosFiltrados.length > 0 ? (
                alojamientosFiltrados.map((alojamiento, index) => (
                  <tr key={index}>
                    <th>{alojamiento.Titulo}</th>
                    <td>{alojamiento.Descripcion}</td>
                    <td>{alojamiento.Latitud}</td>
                    <td>{alojamiento.Longitud}</td>
                    <td>{alojamiento.PrecioPorDia}</td>
                    <td>{alojamiento.CantidadDormitorios}</td>
                    <td>{alojamiento.CantidadBanios}</td>
                    <td>{alojamiento.Estado}</td>
                    <td>{tiposAlojamiento[alojamiento.TipoAlojamiento]}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center">No hay alojamientos disponibles.</td>
                </tr>
              )}                
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Administracion;
