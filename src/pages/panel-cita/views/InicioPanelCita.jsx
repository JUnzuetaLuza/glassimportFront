export const InicioPanelCita = () => {
  return (
    <>
      <div className="welcome-card">
        <div>
          <h2>¡Bienvenid@ a Glass Import!</h2>
          <p>Estamos aquí para ayudarte.</p>
        </div>
      </div>

      <div className="next-appointments">
        <h5 className="mt-4">Tus próximas citas</h5>
        <div className="appointment-card mt-3">
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
            </div>
            <i className="bi bi-chevron-right fs-4 text-secondary"></i>
          </div>
        </div>
      </div>

      <footer className="mt-5"></footer>
    </>
  );
};
