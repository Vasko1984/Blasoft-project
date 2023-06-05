import React, { useState } from "react";
import Logo from "../pictures/pexels-wallace-chuck-3081173.jpg";
import "../assets/ChooseNewPassword.css";
const ChooseNewPassword = () => {

  const [formInput, setFormInput] = useState({
  
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
  
    password: "",
    confirmPassword: "",
  });



  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
     
      password: "",
      confirmPassword: "",
    };




    // if (!formInput.email) {
    //   setFormError({
    //     ...inputError,
    //     email: "Enter valid email address",
    //   });
    //   return
    // }

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return
    }

    setFormError(inputError);
  };

  return (
    <div className="div">
      <div className="h1">
        <img src={Logo} alt="something" className="img" />

      </div>
        <div style={{paddingTop:"15px",paddingBottom:"15px",paddingLeft:"582px"}}>
          <h1>LIBERTY</h1>
        </div>
      <div className="h3">
        <h3>Избери нова лозинка</h3>
      </div>
      <form className="form" onSubmit={validateFormInput}>
        <div>
          <label htmlFor="password" />
          <input
            value={formInput.password}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            type="password"
            name="password"
            placeholder="нова лозинка"
            className="input2"
          />
           <p className="error-message">{formError.password}</p>
        </div>
        <div>
          <label htmlFor="confirmpassword" />
          <input
            value={formInput.confirmPassword}
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
            type="password"
            name="confirmpassword"
            placeholder="Потврди Лозинка"
            className="input2"
          />
          <p className="error-message">{formError.confirmPassword}</p>
        </div>

        <div>
          <button className="button3" onClick={validateFormInput} type="submit">Промени лозинка</button>
        </div>
      </form>
    </div>
  );
};

export default ChooseNewPassword;
