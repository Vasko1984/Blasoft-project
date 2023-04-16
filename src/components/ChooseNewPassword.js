import React from "react";
import Logo from "../pictures/pexels-wallace-chuck-3081173.jpg";
import "../assets/ChooseNewPassword.css";
const ChooseNewPassword = () => {
  return (
    <div className="div">
      <div className="h1">
        <img src={Logo} alt="something" className="img" />

        <div>
          <h1>LIBERTY</h1>
        </div>
      </div>
      <div className="h3">
        <h3>Избери нова лозинка</h3>
      </div>
      <form className="form">
        <div>
          <label htmlFor="email" />
          <input
            type="email"
            id="email"
            placeholder="нова лозинка"
            className="input2"
          />
        </div>
        <div>
          <label htmlFor="password" />
          <input
            type="password"
            id="password"
            placeholder="Потврди Лозинка"
            className="input2"
          />
        </div>

        <div>
          <button className="button3">Промени лозинка</button>
        </div>
      </form>
    </div>
  );
};

export default ChooseNewPassword;
