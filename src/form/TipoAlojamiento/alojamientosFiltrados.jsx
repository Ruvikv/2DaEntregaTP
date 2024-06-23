import React, { useState, useEffect } from 'react';

const alojamientosFiltrados = () => {
  const [todosServicios, serviciosAlojamiento] = useState({});
 

  const filterServicios = async (idServicio) => {
    try {
      const response = await fetch(`http://localhost:3001/servicio/getServicio/${idServicio}`,{
        method: 'GET',
      });
      if (response.ok){
        const data = await response.json();
        return data.Nombre;
      }
    } catch (error) {
      console.error('Error fetching Servicio:', error);
    }
    return null;
  };

  useEffect(() => {
    const filterServicios = async () => {
      const tipos = {};
      for (const servicio of todosServicios){
        const nombre = await filterServicios(servicio.Nombre);
        tipos[servicio.Nombre] = nombre;
      }
      serviciosAlojamiento(tipos);
    };

    filterServicios();
  }, [todosServicios]);


  return (
    <div>
      <div className='container p-4'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Alojamiento</th>
              <th scope="col">Precio Por Dia</th>
              <th scope="col">Cantidad de Dormitorios</th>
              <th scope="col">Cantidad de Baños</th>
              <th scope="col">Estado</th>
              <th scope="col">Tipo de Alojamiento</th>
              <th scope="col">Servicio</th>
            </tr>
          </thead>
          <tbody>
            {alojamientosFiltrados.length > 0 ? (
              alojamientosFiltrados.map((alojamiento, index) => (
            <tr key={index}>
              <th>{alojamiento.Titulo}</th>
              <td>{alojamiento.PrecioPorDia}</td>
              <td>{alojamiento.CantidadDormitorios}</td>
              <td>{alojamiento.CantidadBanios}</td>
              <td>{alojamiento.Estado}</td>
              <td>{tiposAlojamiento[alojamiento.TipoAlojamiento]}</td>
              {/* <td>{todosServicios[alojamiento.TipoAlojamiento]}</td> */}
            </tr>
            ))):(
              <p>No hay alojamientos disponibles.</p>
              )}                
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default alojamientosFiltrados