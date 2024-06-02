import React, { useState, useEffect } from 'react';

const TodosLosTipoAlojamiento = () => {

    const [descripcion, setDescripcion] = useState('');
    const [tipos, setTipos] = useState([]);
    
    useEffect(() => {
        getAlojamientos();
    }, []);

    const enviar = async (evento) => {
        evento.preventDefault();
        if (!descripcion.trim()) {
            alert('Por favor ingresa una descripción');
            return;
        }    
        const json = {
            Descripcion: descripcion
        };
        
        // Conexion con la API
        try {
            const respuesta = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(json),
            });
            if (respuesta.ok) {
                alert('Se Creo Correctamente el Tipo Alojamiento');

                setDescripcion(''); // Limpia los imput
                getAlojamientos(); //recargar
            } else {
                alert('ERROR!! No se creo el Tipo Alojamiento');
            }
        } catch (error) {
            console.error('Failed to create:', error);
        }
    };

    /// Carga los datos a la tabla

    const getAlojamientos = () => {
        fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento')
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
            const respuesta = await fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${id}`, {
                method: 'DELETE',
            });
            if (respuesta.ok) {
                alert('Se eliminó correctamente el Tipo Alojamiento');
                console.log('BORRADO EXITOSO:', respuesta);
                getAlojamientos(); // Recargar la lista
            } else {
                console.error('ERROR al borrar:', respuesta);
                alert('ERROR!! No se eliminó el Tipo Alojamiento');
            }
        } catch (err) {
            console.error('Error al eliminar datos:', err);
            alert('ERROR!! No se eliminó el Tipo Alojamiento');
        }
    };

    /// MODIFICAR LISTA
    const Editar = async (id) => {
        if (!descripcion.trim()) {
            alert('Por favor ingresa una descripción');
            return;}
        const json = {
                Descripcion: descripcion
            };
        try {
            const respuesta = await fetch(`http://localhost:3001/tiposAlojamiento/putTipoAlojamiento/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(json),
            });
            if (respuesta.ok) {
                alert('Se Modifico El Elemento');
                console.log('Coreccion Exitosa:', respuesta);
                setDescripcion(''); // Limpia los imput
                getAlojamientos();
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
        <div className='p-4 container row'>
            {/* Agregar Alojamiento */}
            <div className='formularioAlojamiento col'>
                <h1>Alta de Tipo Alojamiento</h1>
                <form onSubmit={enviar}>
                    <div>
                        <label className='p-3' htmlFor="descripcion">Descripcion:</label>
                        <input className="col-sm-5 col-form-label mt-3 rounded-4"
                        name='descripcion'
                        id='descripcion' value={descripcion}
                        type="text" placeholder="Descripcion Tipo Alojamiento" 
                        aria-label=".form-control-lg example"
                        onChange={(evento) => setDescripcion(evento.target.value)}
                        />
                    </div>
                    <button className="btn btn-success mt-3 col-sm-3" type='submit'>Enviar</button>
                </form>
            </div>
            {/* Mostrar alojamientos, borrar y editar */}
            <table className="table col">
                <thead>
                    <tr>
                        <th scope="col" className='table-info'>ID</th>
                        <th scope="col" className='table-primary'>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(tipos) ? tipos.map(tipo => (
                        <tr key={tipo.idTipoAlojamiento}>
                            <td>{tipo.idTipoAlojamiento}</td>
                            <td>{tipo.Descripcion}</td>
                            <div className='mb-2 bg-transparent d-flex align-items-center'>
                                <button onClick={() => Borrar(tipo.idTipoAlojamiento)} className="btn btn-danger">Eliminar</button>
                                <button onClick={() => Editar(tipo.idTipoAlojamiento)} className="btn btn-warning">Editar</button>
                            </div>
                        </tr>
                    )) : <tr><td colSpan="3"></td></tr>}
                </tbody>
            </table>
        </div>
    );
};

export default TodosLosTipoAlojamiento;
