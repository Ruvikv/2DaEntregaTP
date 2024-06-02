import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/colores.css'
import './css/animaciones.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import AgenciaDeViajes from './pages/AgenciaDeViajes';
import TipoAlojamiento from './form/TipoAlojamiento';

function App() {
  return (

  <Router>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Contacto" element={<Contacto/>} />
      <Route exact path="/AgenciaDeViajes" element={<AgenciaDeViajes/>} />
      <Route exact path="/Administracion" element={<TipoAlojamiento/>} />
    </Routes>
    <Footer/>
    </div>
  </Router>

  );
}

export default App;
