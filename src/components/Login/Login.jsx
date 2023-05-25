import { useState } from "react";

const intialState = {
    email:"",
    password:""
}

const Login = () => {

    const[formData, setFormData] = useState(intialState);

    const changeInput = (event) =>{
     /* const nombreInput = event.target.name;
        const valorInput = event.target.value;
        setFormData({...formdata, [nombreInput]: valorInput});*/
        const {value, name} = event.target;
        setFormData({...formData, [name]: value});
        //console.log(name, value)
    };
    const submitForm = (event) => {
      event.preventDefault();
      console.log("Se han enviado los datos");
      setFormData(intialState);
    };
    console.log(formData)
    
  return (
    <form className="form-login" onSubmit={submitForm}>
      <div className="div-login">

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={changeInput} value={formData.email} />
 
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" onChange={changeInput} value={formData.password} />

        <div>
          <button type="submit">Log in</button>
          <button>Registro</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
