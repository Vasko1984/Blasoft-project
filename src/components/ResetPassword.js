import React, { useState } from "react";
import Logo from "../pictures/pexels-wallace-chuck-3081173.jpg";
import "../assets/ResetPassword.css";
const ResetPassword = () => {



 


  return (
    <div>
      <div className="h1">
        <img src={Logo} alt="something" className="img" />

        <div>
          <h1>LIBERTY</h1>
        </div>
      </div>
      <div className="h">
        <h3>Ресетирање на лозинката</h3>
      </div>
      <form className="form1" >
        <div>
          <label htmlFor="email" />
          <input
          
            type="email"
            id="email"
            placeholder="емаил"
            className="input"
          />
        </div>
      </form>

      <button className="button1">Ресетирај</button>

      <div className="div1">
        <a href="">
          <p>се сети на лозинката.Најави се</p>
        </a>
      </div>
    </div>
  );
};

export default ResetPassword;
