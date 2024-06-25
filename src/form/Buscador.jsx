import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BuscarAlojamientos = () => {
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [alojamientos, setAlojamientos] = useState([]);
  const [alojamientosFiltrados, setAlojamientosFiltrados] = useState([]);

  const [filtroTipoAlojamiento, setFiltroTipoAlojamiento] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");
  const [filtroCantidadBanios, setFiltroCantidadBanios] = useState("");
  const [filtroCantidadDormitorios, setFiltroCantidadDormitorios] = useState("");
  const [filtroPrecio, setFiltroPrecio] = useState("");

  useEffect(() => {
    const fetchTiposAlojamiento = async () => {
      try {
        const response = await fetch("http://localhost:3001/tiposAlojamiento/getTiposAlojamiento");
        if (response.ok) {
          const data = await response.json();
          setTiposAlojamiento(data);
          console.log("Tipos de Alojamiento:", data); // Verificar datos
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
          console.log("Alojamientos:", data); // Verificar datos
        } else {
          console.error("Error al obtener alojamientos.");
        }
      } catch (error) {
        console.error("Error al conectarse con la API:", error);
      }
    };
    fetchAlojamientos();
  }, []);

  const handleFilter = () => {
    let filtered = alojamientos;

    console.log("Aplicando filtros:", {
      filtroTipoAlojamiento,
      filtroEstado,
      filtroCantidadBanios,
      filtroCantidadDormitorios,
      filtroPrecio,
    });

    if (filtroTipoAlojamiento) {
      filtered = filtered.filter(alojamiento => alojamiento.TipoAlojamiento === parseInt(filtroTipoAlojamiento));
    }

    if (filtroEstado) {
      filtered = filtered.filter(alojamiento => alojamiento.Estado === filtroEstado);
    }

    if (filtroCantidadBanios) {
      filtered = filtered.filter(alojamiento => alojamiento.CantidadBanios === parseInt(filtroCantidadBanios));
    }

    if (filtroCantidadDormitorios) {
      filtered = filtered.filter(alojamiento => alojamiento.CantidadDormitorios === parseInt(filtroCantidadDormitorios));
    }

    if (filtroPrecio) {
      filtered = filtered.filter(alojamiento => alojamiento.PrecioPorDia <= parseFloat(filtroPrecio));
    }

    console.log("Alojamientos Filtrados:", filtered);
    setAlojamientosFiltrados(filtered);
  };

  return (
    <div className="container mt-5">
      {/* Sección de búsqueda */}
      <div className="mt-5">
        <h2>Buscar Alojamientos</h2>
        <form className="mb-4">
          <div className="row">
            <div className="col-md-3 mb-3">
              <label htmlFor="filtroTipoAlojamiento" className="form-label">Tipo de Alojamiento:</label>
              <select
                className="form-select"
                id="filtroTipoAlojamiento"
                value={filtroTipoAlojamiento}
                onChange={(e) => setFiltroTipoAlojamiento(e.target.value)}
              >
                <option value="">Todos</option>
                {tiposAlojamiento.map((tipo) => (
                  <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>
                    {tipo.Descripcion}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="filtroEstado" className="form-label">Estado:</label>
              <select
                className="form-select"
                id="filtroEstado"
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value)}
              >
                <option value="">Todos</option>
                <option value="Disponible">Disponible</option>
                <option value="Reservado">Reservado</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="filtroCantidadBanios" className="form-label">Baños:</label>
              <select
                className="form-select"
                id="filtroCantidadBanios"
                value={filtroCantidadBanios}
                onChange={(e) => setFiltroCantidadBanios(e.target.value)}
              >
                <option value="">Todos</option>
                {[...Array(5).keys()].map(i => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="filtroCantidadDormitorios" className="form-label">Dormitorios:</label>
              <select
                className="form-select"
                id="filtroCantidadDormitorios"
                value={filtroCantidadDormitorios}
                onChange={(e) => setFiltroCantidadDormitorios(e.target.value)}
              >
                <option value="">Todos</option>
                {[...Array(5).keys()].map(i => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="filtroPrecio" className="form-label">Precio máximo:</label>
              <input
                type="text"
                className="form-control"
                id="filtroPrecio"
                value={filtroPrecio}
                onChange={(e) => setFiltroPrecio(e.target.value)}
              />
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleFilter}>Buscar</button>
        </form>

        {/* Mostrar alojamientos filtrados */}
        <h2>Alojamientos Disponibles</h2>
        {alojamientosFiltrados.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {alojamientosFiltrados.map((alojamiento, index) => (
              <div key={index} className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{alojamiento.Titulo}</h5>
                    <p className="card-text"><strong>ID:</strong> {alojamiento.idAlojamiento}</p>
                    <p className="card-text"><strong>Descripción:</strong> {alojamiento.Descripcion}</p>
                    <p className="card-text"><strong>Tipo de Alojamiento:</strong> {alojamiento.TipoAlojamiento}</p>
                    <p className="card-text"><strong>Precio por día:</strong> {alojamiento.PrecioPorDia}</p>
                    <p className="card-text"><strong>Latitud:</strong> {alojamiento.Latitud}</p>
                    <p className="card-text"><strong>Longitud:</strong> {alojamiento.Longitud}</p>
                    <p className="card-text"><strong>Dormitorios:</strong> {alojamiento.CantidadDormitorios}</p>
                    <p className="card-text"><strong>Baños:</strong> {alojamiento.CantidadBanios}</p>
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

export default BuscarAlojamientos;
