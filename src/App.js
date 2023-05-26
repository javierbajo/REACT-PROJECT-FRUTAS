import './App.css';
import { useEffect, useState } from "react";
import {Route, Routes, useNavigate, } from 'react-router-dom'
import Home from "./components/Home/Home";
import Frutas from "./components/Frutas/Frutas";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import DetalleFrutas from "./components/DetalleFrutas/DetalleFrutas";
import NotFound from "./components/NotFound";
import Registro from "./components/Registro/Registro";



function App() {
// traigo los datos de los usuarios de la DB--------------
  const [userList, setUserList] = useState([]);

  const getDataUsersAPI = async () => {
    const response = await fetch('http://localhost:3001/users/');
    const res =await response.json()
    setUserList(res);
    
  }
  useEffect(() =>{
    getDataUsersAPI();
  }, [])
  console.log(userList);
//-----------------------------------
// primer estado del user es null, aún no está definido
const [user, setUser] = useState(null);
const [loginError, setLoginError] = useState('');

const loginUser = (formData) => {

  const existUser = userList.find(
    (user) => 
    user.email === formData.email && user.password === formData.password
    );
 
  if(existUser){
    // Segundo estado del user, información del usuario logado
    setUser(existUser);
    setLoginError('')
  }else{
    // tercer estado del user, usuario no encontrado
    setUser(false)
    setLoginError('Usuario o contraseña incorrecta')
  }
};

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
          <Route path="/login" element={<Login loginUser={loginUser} loginError={loginError} />} />
          <Route path="/frutas" element={<Frutas />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/frutas/:fruitName" element={<DetalleFrutas />} />
          <Route path="/register" element={<Registro/>} />
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
