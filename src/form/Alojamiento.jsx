import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddHotelform = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipoAlojamiento, setTipoAlojamiento] = useState("");
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [precioPorDia, setPrecioPorDia] = useState("");
  const [cantidadDormitorios, setCantidadDormitorios] = useState("");
  const [cantidadBanios, setCantidadBanios] = useState("");
  const [estado, setEstado] = useState("Disponible");
  const [alojamientos, setAlojamientos] = useState([]);
  const [alojamientosFiltrados, setAlojamientosFiltrados] = useState([]);

  useEffect(() => {
    const fetchTiposAlojamiento = async () => {
      try {
        const response = await fetch("http://localhost:3001/tiposAlojamiento/getTiposAlojamiento");
        if (response.ok) {
          const data = await response.json();
          setTiposAlojamiento(data);
        } else {
          console.error("Error al obtener tipo de alojamiento.");
        }
      } catch (error) {
        console.error("Error al conectarse con la API:", error);
      }
    };
    fetchTiposAlojamiento();
  }, []);

  useEffect(() => {
    const fetchAlojamientos = async () => {
      try {
        const response = await fetch("http://localhost:3001/alojamiento/getAlojamientos");
        if (response.ok) {
          const data = await response.json();
          setAlojamientos(data);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Titulo: titulo,
      Descripcion: descripcion,
      TipoAlojamiento: tipoAlojamiento,
      Latitud: parseFloat(latitud),
      Longitud: parseFloat(longitud),
      PrecioPorDia: parseFloat(precioPorDia),
      CantidadDormitorios: parseInt(cantidadDormitorios, 10),
      CantidadBanios: parseInt(cantidadBanios, 10),
      Estado: estado,
    };

    try {
      const response = await fetch('http://localhost:3001/alojamiento/createAlojamiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Alojamiento creado exitosamente.');
        // Actualizar lista de alojamientos y filtrados si el nuevo alojamiento está disponible
        setAlojamientos([...alojamientos, data]);
        if (estado === 'Disponible') {
          setAlojamientosFiltrados([...alojamientosFiltrados, data]);
        }
      } else {
        console.error('Error al crear el alojamiento.');
        alert('Error al crear el alojamiento.');
      }
    } catch (error) {
      console.error('Error al conectarse con la API:', error);
      alert('Error al conectarse con la API.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h1 className="h3">Nuevo Alojamiento</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">Título:</label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Descripción:</label>
              <textarea
                className="form-control"
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tipoAlojamiento" className="form-label">Tipo de Alojamiento:</label>
              <select
                className="form-select"
                id="tipoAlojamiento"
                value={tipoAlojamiento}
                onChange={(e) => setTipoAlojamiento(e.target.value)}
              >
                <option value="">Seleccione tipo de alojamiento</option>
                {tiposAlojamiento.map((tipo) =>
                  <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>
                    {tipo.Descripcion}
                  </option>
                )}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="precioDia" className="form-label">Precio por día:</label>
              <input
                type="text"
                className="form-control"
                id="precioDia"
                value={precioPorDia}
                onChange={(e) => setPrecioPorDia(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="latitud" className="form-label">Latitud:</label>
                <input
                  type="text"
                  className="form-control"
                  id="latitud"
                  value={latitud}
                  onChange={(e) => setLatitud(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="longitud" className="form-label">Longitud:</label>
                <input
                  type="text"
                  className="form-control"
                  id="longitud"
                  value={longitud}
                  onChange={(e) => setLongitud(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cantidadDormitorios" className="form-label">Cantidad de Dormitorios:</label>
                <select
                  className="form-select"
                  id="cantidadDormitorios"
                  value={cantidadDormitorios}
                  onChange={(e) => setCantidadDormitorios(e.target.value)}
                >
                  <option value="">Seleccione cantidad de dormitorios</option>
                  {[...Array(5).keys()].map(i => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cantidadBanios" className="form-label">Cantidad de Baños:</label>
                <select
                  className="form-select"
                  id="cantidadBanios"
                  value={cantidadBanios}
                  onChange={(e) => setCantidadBanios(e.target.value)}
                >
                  <option value="">Seleccione cantidad de baños</option>
                  {[...Array(5).keys()].map(i => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="estado" className="form-label">Estado:</label>
              <select
                className="form-select"
                id="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="Disponible">Disponible</option>
                <option value="Reservado">Reservado</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Agregar</button>
          </form>
        </div>
      </div>

      {/* Mostrar alojamientos filtrados */}
      <div className="mt-5">
        <h2>Alojamientos Disponibles</h2>
        {alojamientosFiltrados.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {alojamientosFiltrados.map((alojamiento, index) => (
              <div key={index} className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{alojamiento.Titulo}</h5>
                    <p className="card-text">{alojamiento.Descripcion}</p>
                    <p className="card-text"><strong>Tipo de Alojamiento:</strong> {alojamiento.TipoAlojamiento}</p>
                    <p className="card-text"><strong>Precio por día:</strong> {alojamiento.PrecioPorDia}</p>
                    <p className="card-text"><strong>Latitud:</strong> {alojamiento.Latitud}</p>
                    <p className="card-text"><strong>Longitud:</strong> {alojamiento.Longitud}</p>
                    <p className="card-text"><strong>Cantidad de Dormitorios:</strong> {alojamiento.CantidadDormitorios}</p>
                    <p className="card-text"><strong>Cantidad de Baños:</strong> {alojamiento.CantidadBanios}</p>
                    <p className="card-text"><strong>Estado:</strong> {alojamiento.Estado}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay alojamientos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default AddHotelform;

