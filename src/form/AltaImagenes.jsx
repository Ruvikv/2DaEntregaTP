import React, {useEffect, useState} from 'react'


const AltaImagenes = () =>{

    // devoluciones generales
    const [alojamientos, setAlojamientos] = useState('');
    const [file,setFile] = useState([]);
    const [allImagenes, setAllImagenes] = useState([]);


    const [alojamientoElegido, setAlojamientoElegido] = useState('');


    //----------------------------------------------------------------




    //----------------------------------------------------------------





      // Envia el formulario
      const sendHandler = async (e) => {
        
        const data = {
          idAlojamiento: alojamientoElegido,
          RutaArchivo: file,

        };      
      
        try {
          const respuesta = await fetch('http://localhost:3001/imagen/createImagen', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
      
          if (respuesta.ok) {
            alert('Se Creo Correctamente la Imagen');
            setFile(null);
            setAlojamientoElegido(''); 
          } else {
            alert('ERROR!! No se creo la Imagen');
          }
        } catch (error) {
          console.error('Failed to create:', error);
        }
      };



    //------------------------------------------------------------------------------


    // Devuelve todos los alojamientos
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



    // me devuelve todas las imagenes
    useEffect(() => {
      const fetchAllImagenes = async () => {
        try {
          const res = await fetch('http://localhost:3001/imagen/getAllImagenes');
          if (res.ok) {
            const data = await res.json();
            setAllImagenes(data);
            console.log(data);
          } else {
            console.error('Error en obtener imágenes');
          }
        } catch (error) {
          console.error('Error al conectarse con la API:', error);
        }
      };
      fetchAllImagenes();
    }, []);




/*         const data = await res.json();
          if (Array.isArray(data)) {
            setImagenesTotales(data);
          } else {
            console.error('ERROR: Array esperada pero no obtenida', data);
            }
          } catch (error) {
            console.error('Error recuperación de datos:', error);
          }
        };
          fetchAllImagenes();
        }, []);  */
        

/*         const getAllImagenes = async (id) => {
          try {
            const response = await fetch(`http://localhost:3001/imagen/getAllImagenes?idAlojamiento=${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            });
        
            if (response.ok) {
              const data = await response.json();
              setImages(data);
            } else {
              console.error('Error en obtener Imagenes');
            }
          } catch (error) {
            console.error('Error al conectarse con la API:', error);
          }
        };

        useEffect(() => {
          getAllImagenes(alojamiento);
        }) */
        

/*     const filterImage = async (idImagen) => {
      try{
        const response = await fetch(`http://localhost:3001/imagen/getImagen/${idImagen}`, {
          method: 'GET',
        });
        if (response.ok) {
          const data = await response.json();
          return data.RutaArchivo
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
      return null;
    };

    useEffect(() => {
      const fetchAllImagenes = async () => {
        const tipos = {};
        for (const imagen of imagenesTotales) {
          const rutaImagen = await filterImage(imagen.idImagen);
          tipos[imagen.idImagen] = rutaImagen;
        }
        setImages(tipos);
      };
    
      fetchAllImagenes();
    }, [imagenesTotales]); */


  return (
      <div>
        <div className='container'>
          <div className='p-4'>
            <div className='row'>
              <div className="d-flex justify-content-center gap-3">
                <div className='row col-6'>
                  <select
                    id='alojamiento'
                    onChange={(e) => setAlojamientoElegido(e.target.value)}
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
          <div  className="card" style={{ width: '18rem' }}>
            <img  className="card-img-top" alt="Imagen del alojamiento" />
            <div className="card-body">
              <p className="card-text"></p>
            </div>
          </div>
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



