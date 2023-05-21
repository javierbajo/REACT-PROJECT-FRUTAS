import './App.css';

import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home/Home";
import Frutas from "./components/Frutas/Frutas";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Contacto from "./components/Contacto/Contacto";


function App() {
  return (
    <>
      <div className="App">
        <div className='contenedor-principal'>
        <h1>Bienvenidos al mundo de la fruta</h1>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/frutas" element={<Frutas />} />
          <Route path="/contact" element={<Contacto />} />
        </Routes>
        </div>
        <footer>
          <p>Aquí va el footer</p>
        </footer>

      </div>
    </>
  );
}

export default App;
