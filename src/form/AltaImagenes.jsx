import React, {useEffect, useState} from 'react'

const AltaImagenes = () =>{

    const [alojamientos, setAlojamientos] = useState('');
    const [file,setFile] = useState('');
    const [alojamiento, setAlojamiento] = useState('');
    const [imagenAlojamiento, setImagenAlojamiento] = useState([]);



    useEffect(() => {
      const fetchAlojamientos = async () => {
        try {
          const response = await fetch("http://localhost:3001/alojamiento/getAlojamientos/");
          if (response.ok){
            const data = await response.json();
            setAlojamientos(data);
          } else {
            console.error('Error en obtener Alojamientos');
          }
        } catch (error){
          console.error('Error al conectarse con la API:', error);
        }
      };
      fetchAlojamientos();
      }, []);


      const sendHandler = async (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('file', file);
        
        const data ={
          idAlojamiento: alojamiento,
          RutaArchivo: file,
        }

        try{
          const respuesta = await fetch('http://localhost:3001/imagen/createImagen',{
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            });

            if (respuesta.ok){
              alert('Se Creo Correctamente la Imagen')
              setFile(null)
              setAlojamiento(''); 
            } else {
              alert('ERROR!! No se creo la Imagen');
            }
            } catch (error){
              console.error('Failed to create:', error);
            }
        };
    
    useEffect(() => {
      fetch('http://localhost:3001/imagen/getAllImagenes')
        .then(res => res.json())
        .then(data => {
          console.log('Datos recibidos:', data);
          setImagenAlojamiento(data);
        })
        .catch(err => {
          console.error('Error fetching images:', err);
        });
    }, []);
        

  return (
      <div>
        <div className='container'>
          <div className='p-4'>
            <div className='row'>
              <div className="d-flex justify-content-center gap-3">
                <div className='row col-6'>
                  <select
                    id='alojamiento'
                    onChange={(e) => setAlojamiento(e.target.value)}
                    className="form-select" aria-label="Default select example">
                      <option selected>Seleccione una Alojamiento</option>
                      {alojamientos.length > 0 ? (
                      alojamientos.map((tipo) =>
                      <option key={tipo.idAlojamiento} value={tipo.idAlojamiento}>
                        {tipo.Titulo}
                      </option>
                      )) : (<p>No hay alojamientos disponibles.</p>
                        )}
                  </select>
                </div>
                <div className='col-4'>
                  <input
                  onChange={(e) => setFile(e.target.value)}               
                  className="form-control" 
                  type="file" 
                  id="fileImput"/>                  
                </div>
                <div className='col-2'>
                  <button
                  onClick={sendHandler}
                  type="button" 
                  className="btn btn-success col-12">Cargar</button>                    
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container d-flex gap-3'>
            {/* imagenes */}
            {imagenAlojamiento.map((imagen) =>(
            <div key={imagen} className="card" style={{ width: '18rem' }}>
              <img src={'http://localhost:3001/imagen/' + imagen.RutaArchivo} className="card-img-top" alt="Imagen del alojamiento" />
              <div className="card-body">
                <p className="card-text">{imagen.idAlojamiento}</p>
              </div>
            </div>  
            ))}             
        </div>
        <div className='container p-3'>
          <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              {alojamientos.length > 0 ? (
                alojamientos.map((alojamiento) => (
              <tr key={alojamiento.id}>
                <td>{alojamiento.Titulo}</td>
                <td>{alojamiento.Descripcion}</td>
                <td>{alojamiento.Estado}</td>
              </tr>
              ))
              ) : (<p>No hay alojamientos disponibles.</p>
              )}
            </tbody>
          </table>
        </div>        
    </div>
  )
  }

export default AltaImagenes



