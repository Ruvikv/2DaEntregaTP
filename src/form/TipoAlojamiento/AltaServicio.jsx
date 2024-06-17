import React, { useState, useEffect } from 'react';

const TipoAlojamiento = () => {
  const [nombre, setNombre] = useState('');
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
      getServicios();
  }, []);

  ///Enviar Datos

  const enviar = async (evento) => {
    evento.preventDefault();
    if (!nombre.trim()) {
        alert('Por favor ingresa una descripción');
        return;
    }    
    const json = {
        Nombre: nombre
    };
    
    // Conexion con la API
    try {
        const respuesta = await fetch('http://localhost:3001/servicio/createServicio', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(json),
        });
        if (respuesta.ok) {
            alert('Se Creo Correctamente el Servicio');

            setNombre(''); // Limpia los imput
            getServicios(); //recargar
        } else {
            alert('ERROR!! No se creo el Servicio');
        }
    } catch (error) {
        console.error('Failed to create:', error);
    }
};

  /// Carga los datos a la tabla

  const getServicios = () => {
      fetch('http://localhost:3001/servicio/getAllServicios')
          .then(res => res.json())
          .then(res => {
              if (Array.isArray(res)) {
                  setTipos(res);
              } else {
                  console.error('ERROR: Array esperada pero no obtenida', res);
              }
          })
          .catch(error => console.error('Error recuperacion de datos:', error));
  };

  // Borra datos a la tabla 
  const Borrar = async (id) => {
      try {
          const respuesta = await fetch(`http://localhost:3001/servicio/deleteServicio/${id}`, {
              method: 'DELETE',
          });
          if (respuesta.ok) {
              alert('Se eliminó correctamente el Servicio');
              console.log('BORRADO EXITOSO:', respuesta);
              getServicios(); // Recargar la lista
          } else {
              console.error('ERROR al borrar:', respuesta);
              alert('ERROR!! No se eliminó el Servicio');
          }
      } catch (err) {
          console.error('Error al eliminar datos:', err);
          alert('ERROR!! No se eliminó el Servicio');
      }
  };

  /// MODIFICAR LISTA
  const Editar = async (id) => {
      if (!nombre.trim()) {
          alert('Por favor ingresa una descripción');
          return;}
      const json = {
              Nombre: nombre
          };
      try {
          const respuesta = await fetch(`http://localhost:3001/servicio/updateServicio/${id}`, {
              method: 'PUT',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(json),
          });
          if (respuesta.ok) {
              alert('Se Modifico el Servicio');
              console.log('Coreccion Exitosa:', respuesta);
              setNombre(''); // Limpia los imput
              getServicios();
          } else {
              console.error('ERROR AL MODIFICAR:', respuesta);
              alert('ERROR!! NO SE MODIFICO el Tipo Alojamiento');
          }
      } catch (err) {
          console.error('ERROR AL MODIFICAR LOS DATOS:', err);
          alert('ERROR!! NO SE MODIFICO el Tipo Alojamiento');
      }
  };
  return (
    <div>
      <div className='col d-flex justify-content-center text-bg-info container'>
        <div className=''>
          <h1>Alta de Servicios</h1>
          <form onSubmit={enviar}>
            <input className="col-9 col-form-label mt-2 rounded-4 p-3"
            name='nombre'
            id='nombre' value={nombre}
            type="text" placeholder="Nombre Del Servicio" 
            aria-label=".form-control-lg example"
            onChange={(evento) => setNombre(evento.target.value)}/>
            <button className="btn btn-success mt-3 col-5" type='submit'>Enviar</button>
          </form>
          <div className='col'>
            <table className="table mt-4">
                <thead>
                  <tr>
                    <th scope="col" className='table-primary'>Servicios</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(tipos) ? tipos.map(tipo => (
                    <tr key={tipo.idServicio}>
                      <td>{tipo.Nombre}</td>
                      <div className='mb-2 bg-transparent d-flex align-items-center'>
                        <button onClick={() => Borrar(tipo.idServicio)} className="btn btn-danger">Eliminar</button>
                        <button onClick={() => Editar(tipo.idServicio)} className="btn btn-warning">Editar</button>
                      </div>
                    </tr>
                    )) : <tr><td colSpan="3"></td></tr>}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

)
}

export default TipoAlojamiento
