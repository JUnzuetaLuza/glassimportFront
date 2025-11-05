export const LoginComponent = ({ handleFlipped }) => {
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

        <form id="loginForm">
          <div className="input-group">
            <i className="fas fa-envelope icon"></i>
            <input
              id="loginEmail"
              type="email"
              placeholder="Correo electrónico"
              required
            />
          </div>

          <div className="input-group password-group">
            <i className="fas fa-lock icon"></i>
            <input
              id="loginPassword"
              type="password"
              placeholder="Contraseña"
              required
            />
            <i className="fas fa-eye-slash toggle-password"></i>
          </div>

          <a href="#" className="forgot-password">
            ¿Olvidaste tu contraseña?
          </a>

          <button type="submit" className="btn-get-started">
            Comenzar
          </button>
        </form>

        <p className="or-separator">O inicia sesión con</p>

        <div className="social-login">
          <button className="social-btn google">
            <i className="fab fa-google"></i>
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
