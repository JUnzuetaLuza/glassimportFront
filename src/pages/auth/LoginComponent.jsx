import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useLoginMutation } from "../../stores/auth/auth-api";
import { validEmail } from "../../utils/valid-email";

export const LoginComponent = ({ handleFlipped }) => {
  const [error, setError] = useState();
  const { formState, onInputChange, onResetForm } = useForm({
    email: "",
    password: "",
  });

  const [login, {}] = useLoginMutation();

  const { email, password } = formState;

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password | email) {
      setError("Campos incompletos");
      return;
    }
    if (password && password.length < 6) {
      setError("Contraseña no cumple con el patron del sistema");
      return;
    }
    if (validEmail(email)) {
      setError("El email no es válido");
      return;
    }

    try {
      const data = await login({ email, password });
      /* llamar al storage, y guardar datos del user */
    } catch (err) {
      console.log(err);
    } finally {
      setError("");
      onResetForm();
    }
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

        <form id="loginForm" onSubmit={onSubmit}>
          <div className="input-group">
            <i className="fas fa-envelope icon"></i>
            <input
              id="loginEmail"
              type="email"
              placeholder="Correo electrónico"
              required
              name="email"
              onChange={onInputChange}
              value={email}
            />
          </div>

          <div className="input-group password-group">
            <i className="fas fa-lock icon"></i>
            <input
              id="loginPassword"
              type="password"
              placeholder="Contraseña"
              required
              name="password"
              onChange={onInputChange}
              value={password}
            />
            <i className="fas fa-eye-slash toggle-password"></i>
          </div>
          {error && <p>{error}</p>}
          <a href="#" className="forgot-password">
            ¿Olvidaste tu contraseña?
          </a>

          <button
            type="submit"
            className="btn-get-started"
            onClick={handleGoogleLogin}
          >
            Comenzar
          </button>
        </form>

        <p className="or-separator">O inicia sesión con</p>

        <div className="social-login">
          <button className="social-btn google" onClick={handleGoogleLogin}>
            <i className="fab fa-google">
              <strong>G</strong>
            </i>
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
