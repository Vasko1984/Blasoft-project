import React from "react";
import Logo from "../pictures/pexels-wallace-chuck-3081173.jpg";
import "../assets/LandingPage.css";
import { useState } from "react";
// import { PropTypes } from "prop-types";
// ("http:d2ef-77-29-32-192.ngrok-free.app");
async function loginUser(credentials) {
  return {
    "id": "i157452747",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2ODMzMDY4NzcsImV4cCI6MTcxNDg0Mjg3NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoidmFza29AbWFpbC5jb20iLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJ2YXNrb0BtYWlsLmNvbSIsIlJvbGUiOlsiTWFuYWdlciIsIlByb2plY3QgQWRtaW5pc3RyYXRvciJdfQ.5yFFOwl2yuKq8Od6K-GkqW_KCKxZPnVH776JYgcngvo"
};
  fetch(
    `https://d2ef-77-29-32-192.ngrok-free.app/login?` +
      new URLSearchParams({
        username: credentials.username,
        password: credentials.password,
      }),{method:"GET",
      mode:"cors"
    }
    // `https://api.liberty-transport.techup.me/LogIn?email=${username}%40yahoo.com&password=${password}`,
    // {
    //   method: `GET`,
    //   "Content-Type": "application/json",
    //   mode: "no-cors"}
  )
    .then((data) => {
      console.log("ok",data);
      return data.json()})
    .catch((error) => console.log(error));
}

const LandingPage = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    console.log("vlex");
    e.preventDefault();
    const res = await loginUser({
      username,
      password,
    });
    // console.log(token);
    localStorage.setItem("user",res.token );
    
    // setToken(token);
  };

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
      <div className="form">
        <div>
          <label htmlFor="email" />
          <input
            type="email"
            id="email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="нова лозинка"
            className="input"
          />
        </div>
        <div>
          <label htmlFor="password" />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Потврди Лозинка"
            className="input"
          />
        </div>

        <div>
          <button className="button" onClick={handleSubmit}>
            Најава
          </button>
        </div>
      </div>
      <div className="div1">
        <a href="resetpassword">
          <p>ја заборави лозинката?</p>
        </a>
        <a href="/">
          <p>Немате корисничка сметка!Регистрирај се</p>
        </a>
      </div>
    </div>
  );
};

// Login.PropTypes = {
//   setToken: PropTypes.func.isRequired,
// };

export default LandingPage;
