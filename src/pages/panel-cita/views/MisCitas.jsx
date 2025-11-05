export const MisCitas = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Mis Citas</h2>
          <p className="text-muted">Aquí verás tus citas generadas.</p>
        </div>
        <a href="Citas.html" className="add-btn text-decoration-none">
          <i className="bi bi-plus-circle me-1"></i> Nueva Cita
        </a>
      </div>

      <div id="toastMensaje" className="toast-alert">
        <i className="bi bi-check-circle-fill me-2"></i>
        ¡Tu cita ha sido generada exitosamente!
      </div>

      <div id="toastCancel" className="toast-alert toast-error">
        <i className="bi bi-x-circle-fill me-2"></i>
        Tu cita ha sido cancelada correctamente.
      </div>
      <div className="next-appointments">
        <h5 className="mt-4">Tus próximas citas</h5>
        <div className="appointment-card mt-3" id="cita1">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="date mb-0">29 OCT.</p>
              <small className="text-danger">Presencial</small>
              <p className="mt-2 mb-0 fw-bold">Asesor</p>
              <small>Juan Melendez</small>
              <div className="mt-2">
                <i className="bi bi-clock"></i>{" "}
                <span className="time">06:10 p.m.</span>
              </div>
              <a
                href="#"
                id="cancelarBtn"
                className="pending mt-2 d-inline-block text-decoration-none"
              >
                <i className="bi bi-exclamation-triangle-fill text-warning"></i>{" "}
                Cancelar Cita
              </a>
            </div>
            <i className="bi bi-chevron-right fs-4 text-secondary"></i>
          </div>
        </div>
      </div>
    </>
  );
};
