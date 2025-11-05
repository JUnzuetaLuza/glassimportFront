export const RegisterComponent = ({ handleFlipped }) => {
  return (
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
          <span
            onClick={handleFlipped}
            id="show-login"
            className="register-link"
          >
            Inicia sesión
          </span>
        </p>
      </div>
    </div>
  );
};
