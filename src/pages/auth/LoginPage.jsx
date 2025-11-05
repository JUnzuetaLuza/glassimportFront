import "./auth.css";
export const LoginPage = () => {
  return (
    <>
      <div className="background" id="parallax-bg"></div>

      <div className="login-container">
        <div className="card-wrapper" id="card-wrapper">
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
                <a href="#" id="show-register" className="register-link">
                  Crear cuenta
                </a>
              </p>
            </div>
          </div>

          <div className="login-card card-back">
            <div className="card-header">
              <i className="fa-solid fa-user-plus"></i>
            </div>
            <div className="card-body">
              <h2>CREAR CUENTA</h2>
              <p className="subtitle">Crea una cuenta para iniciar sesion </p>

              <form id="registerForm">
                <div className="input-group">
                  <i className="fas fa-user icon"></i>
                  <input
                    type="text"
                    id="username"
                    placeholder="Nombre completo"
                    required
                  />
                </div>

                <div className="input-group">
                  <i className="fas fa-envelope icon"></i>
                  <input
                    type="email"
                    id="email"
                    placeholder="Correo electrónico"
                    required
                  />
                </div>

                <div className="input-group password-group">
                  <i className="fas fa-lock icon"></i>
                  <input
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                    required
                  />
                  <i className="fas fa-eye-slash toggle-password"></i>
                </div>

                <div className="input-group password-group">
                  <i className="fas fa-lock icon"></i>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirmar contraseña"
                    required
                  />
                  <i className="fas fa-eye-slash toggle-password"></i>
                </div>

                <button type="submit" className="btn-get-started">
                  Registrarse
                </button>
              </form>

              <p className="register-text">
                ¿Ya tienes una cuenta?
                <a href="#" id="show-login" className="register-link">
                  Inicia sesión
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
