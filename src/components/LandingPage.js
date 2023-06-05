import React from "react";
import Logo from "../pictures/pexels-wallace-chuck-3081173.jpg";
import "../assets/LandingPage.css";
import { useState } from "react";



const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Perform input validation

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful
        const { token } = await response.json();

        // Store token in local storage
        localStorage.setItem('token', token);

        // Redirect or update UI
      } else {
        // Login failed
        // Handle error or show error message
      }
    } catch (error) {
      // Handle network or server errors
    }

    setIsLoading(false);
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
        <h3>Добредојдовте Назад</h3>
      </div>
      <form className="form"  onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="емаил"
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
            placeholder=" Лозинка"
            className="input"
          />
        </div>

        <div>
          <button className="button" type="submit" disabled={isLoading}>
            {isLoading ? 'Најава ....' : 'Се Најавувам '}
       
          </button>
        </div>
      </form>
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
