import React, { useState, useEffect } from 'react';
import AltaAlojamiento from './TipoAlojamiento/AltaAlojamiento';
import AltaServicio from './TipoAlojamiento/AltaServicio';

const TipoAlojamiento = () => {
  const [alojamientosFiltrados, setAlojamientosFiltrados] = useState([]);
  const [tiposAlojamiento, setTiposAlojamiento] = useState({});
  const [allServicios, setAllServicios] = useState([]);
  const [alojamientosServicios, setAlojamientosServicios] = useState([]);
  const [idAlojamientoServicio, setIdAlojamientoServicio] = useState([]);
  const [alojamientoElegido, setAlojamientoElegido] = useState('');
  const [alojamientoServicio, setAlojamientoServicio] = useState('');

  const sendHandler = async (e) => {
    e.preventDefault();

    const data = {
      idAlojamiento: alojamientoElegido,
      idServicio: alojamientoServicio,
    };

    try {
      const respuesta = await fetch('http://localhost:3001/alojamientosServicios/createAlojamientoServicio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (respuesta.ok) {
        alert('Se relacionaron Alojamiento y servicios elegidos correctamente');
        setAlojamientoElegido('');
        setAlojamientoServicio('');
      } else {
        alert('ERROR!! No se logró lo requerido');
      }
    } catch (error) {
      console.error('Failed to create:', error);
    }
  };

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const res = await fetch('http://localhost:3001/servicio/getAllServicios');
        const data = await res.json();
        if (Array.isArray(data)) {
          setAllServicios(data);
        } else {
          console.error('ERROR: Array esperada pero no obtenida', data);
        }
      } catch (error) {
        console.error('Error recuperación de datos:', error);
      }
    };
    fetchServicios();
  }, []);

  useEffect(() => {
    const fetchAllServicios = async () => {
      try {
        const res = await fetch('http://localhost:3001/alojamientosServicios/getAllAlojamientoServicios');
        const data = await res.json();
        if (Array.isArray(data)) {
          setAlojamientosServicios(data);
        } else {
          console.error('ERROR: Array esperada pero no obtenida', data);
        }
      } catch (error) {
        console.error('Error recuperación de datos:', error);
      }
    };
    fetchAllServicios();
  }, []);

  const filterAlojamientoServicios = async (idServicio) => {
    try {
      const response = await fetch(`http://localhost:3001/servicio/getServicio/${idServicio}`, {
        method: 'GET',
      });
      if (response.ok) {
        const data = await response.json();
        return data.Nombre;
      }
    } catch (error) {
      console.error('Error fetching tipo alojamiento:', error);
    }
    return null;
  };

  useEffect(() => {
    const fetchTiposAlojamiento = async () => {
      const tipos = {};
      for (const alojamientoServicio of alojamientosServicios) {
        const servicio = await filterAlojamientoServicios(alojamientoServicio.idServicio);
        tipos[alojamientoServicio.idServicio] = servicio;
      }
      setIdAlojamientoServicio(tipos);
    };

    fetchTiposAlojamiento();
  }, [alojamientosServicios]);

  const filterTipoAlojamiento = async (idTipoAlojamiento) => {
    try {
      const response = await fetch(`http://localhost:3001/tiposAlojamiento/getTipoAlojamiento/${idTipoAlojamiento}`, {
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
        const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
        if (response.ok) {
          const data = await response.json();
          setAlojamientosFiltrados(data.filter((alojamiento) => alojamiento.Estado === 'Disponible'));
        } else {
          console.error('Error al obtener alojamientos.');
        }
      } catch (error) {
        console.error('Error al conectarse con la API:', error);
      }
    };
    fetchAlojamientos();
  }, []);

  return (
    <div>
      <div className='d-flex justify-content-center gap-3'>
        <div>
          <AltaAlojamiento />
        </div>
        <div>
          <AltaServicio />
        </div>
      </div>
      <div className='container pt-4'>
        <div className='row'>
          <div className='col'>
            <select onChange={(e) => setAlojamientoElegido(e.target.value)} className="form-select form-select-lg mb-3" aria-label="Large select example">
              <option selected>Seleccione un Alojamiento</option>
              {alojamientosFiltrados.length > 0 ? (
                alojamientosFiltrados.map((alojamiento) => (
                  <option key={alojamiento.idAlojamiento} value={alojamiento.idAlojamiento}>
                    {alojamiento.Titulo}
                  </option>
                ))
              ) : (
                <p>No hay alojamientos disponibles.</p>
              )}
            </select>
          </div>
          <div className='col'>
            <select onChange={(e) => setAlojamientoServicio(e.target.value)} className="form-select form-select-lg mb-3" aria-label="Small select example">
              <option selected>Seleccionar Servicio</option>
              {allServicios.map((servicio) => (
                <option key={servicio.idServicio} value={servicio.idServicio}>
                  {servicio.Nombre}
                </option>
              ))}
            </select>
          </div>
          <div className='col'>
            <button onClick={sendHandler} type="button" className="btn btn-success col-7">Enviar</button>
          </div>
        </div>
      </div>
      <div className='container p-4'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Alojamiento</th>
              <th scope="col">Precio Por Dia</th>
              <th scope="col">Estado</th>
              <th scope="col">Tipo de Alojamiento</th>
              <th scope="col">Servicios</th>
            </tr>
          </thead>
          <tbody>
            {alojamientosFiltrados.length > 0 ? (
              alojamientosFiltrados.map((alojamiento, index) => (
                <tr key={index}>
                  <th>{alojamiento.Titulo}</th>
                  <td>{alojamiento.PrecioPorDia}</td>
                  <td>{alojamiento.Estado}</td>
                  <td>{tiposAlojamiento[alojamiento.TipoAlojamiento]}</td>
                  <td>
                    {alojamientosServicios
                      .filter((servicio) => servicio.idAlojamiento === alojamiento.idAlojamiento)
                      .map((servicio, idx) => (
                        <div key={idx}>{idAlojamientoServicio[servicio.idServicio]}</div>
                      ))}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No hay alojamientos disponibles.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TipoAlojamiento;
