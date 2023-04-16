import React from "react";
import Logo from "../pictures/pexels-wallace-chuck-3081173.jpg";
import "../assets/LandingPage.css";
const LandingPage = () => {
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
            className="input"
          />
        </div>
        <div>
          <label htmlFor="password" />
          <input
            type="password"
            id="password"
            placeholder="Потврди Лозинка"
            className="input"
          />
        </div>

        <div>
          <button className="button">Најава</button>
        </div>
      </form>
      <div className="div1">
        <a href="resetpassword">
          <p>ја заборави лозинката?</p>
        </a>
        <a href="">
          <p>Немате корисничка сметка!Регистрирај се</p>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
