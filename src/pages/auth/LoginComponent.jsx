import { useState } from "react";

export const LoginComponent = ({ handleFlipped }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:8080/api/users/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error al iniciar sesión:", error);
  //   }
  // };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div className="login-card card-front">
      <div className="card-header">
        <a href="paginaPrincipal.html">
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="card-body">
        <h2>INICIAR SESIÓN</h2>
        <p className="subtitle">
          Inicia sesion con nostros para reservar tu cita{" "}
        </p>

        <form id="loginForm" /*onSubmit={handleSubmit}*/ >
          <div className="input-group">
            <i className="fas fa-envelope icon"></i>
            <input
              id="loginEmail"
              type="email"
              placeholder="Correo electrónico"
              required
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group password-group">
            <i className="fas fa-lock icon"></i>
            <input
              id="loginPassword"
              type="password"
              placeholder="Contraseña"
              required
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
            <i className="fas fa-eye-slash toggle-password"></i>
          </div>

          <a href="#" className="forgot-password">
            ¿Olvidaste tu contraseña?
          </a>

          <button type="submit" className="btn-get-started" onClick={handleGoogleLogin}>
            Comenzar
          </button>
        </form>

        <p className="or-separator">O inicia sesión con</p>

        <div className="social-login">
          <button className="social-btn google" onClick={handleGoogleLogin}>
            <i className="fab fa-google"><strong>G</strong></i>
          </button>
        </div>

        <p className="register-text">
          ¿No tienes una cuenta?
          <span
            onClick={handleFlipped}
            id="show-register"
            className="register-link"
          >
            Crear cuenta
          </span>
        </p>
      </div>
    </div>
  );
};
