import { useState } from "react";
import { Link } from "react-router-dom";

const intialState = {
    email:"",
    password:""
}

const Login = ({ loginUser, loginError }) => {

    const[formData, setFormData] = useState(intialState);

    const changeInput = (event) =>{
      //OTRA FORMA DE PONER LO MISMO
     /* const nombreInput = event.target.name; 
        const valorInput = event.target.value;
        setFormData({...formdata, [nombreInput]: valorInput});*/
        const {value, name} = event.target;
        setFormData({...formData, [name]: value});
        console.log(name, value)
    };
    const submitForm = (event) => {
      event.preventDefault();
      console.log("Se han enviado los datos");
      loginUser(formData)
      setFormData(intialState);
    };
    console.log(formData)
    



  return (
    <form className="form-login" onSubmit={submitForm}>
      <div className="div-login">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={changeInput}
          value={formData.email}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={changeInput}
          value={formData.password}
        />

        <div>
          <button type="submit">Login</button>
          <Link to="/register">
            <button>Registro</button>
          </Link>
          <button>Logout</button>
        </div>
      </div>

      {loginError ? <div>{loginError} </div>: null}
    </form>
  );
};

export default Login;
