import './App.css';

import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home/Home";
import Frutas from "./components/Frutas/Frutas";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import DetalleFrutas from "./components/DetalleFrutas/DetalleFrutas";
import NotFound from "./components/NotFound";


function App() {
  return (
    <>
      <div className="App">
        <div className='contenedor-principal'>

          <header>
          <div>
        <h1>Bienvenidos al mundo de la fruta</h1>
        </div>
        <NavBar />
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/frutas" element={<Frutas />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/frutas/:fruitName" element={<DetalleFrutas />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        


        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
