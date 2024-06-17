import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const Administracion = () => {

    const [descripcion, setDescripcion] = useState('');
    const [tipos, setTipos] = useState([]);
    
    useEffect(() => {
        getAlojamientos();
    }, []);

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

        <div>
            <div className='p-4 d-flex justify-content-center gap-5'>
                <button className="shadow__btn">Alojamiento</button>                           
                <Link to='/TipoAlojamiento'><button className="shadow__btn2">Tipo Alojamiento y Servicios</button></Link>
            </div>
            <div className='d-flex justify-content-center'>
                <div className=''>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className='table-primary'>Tipo Alojamiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(tipos) ? tipos.map(tipo => (
                                <tr key={tipo.idTipoAlojamiento}>
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
            </div>
        </div>
    );
};

export default Administracion;
