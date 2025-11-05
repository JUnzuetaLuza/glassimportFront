export const NuevaCita = () => {
  return (
    <>
      <div className="welcome-card mb-4 text-center">
        <h2>¡Reserva tu Próxima Cita!</h2>
        <p className="text-secondary">
          Completa los datos para agendar tu visita al taller.
        </p>
      </div>

      <div
        className="alert alert-success text-center shadow-sm"
        id="alertaCita"
      >
        <i className="bi bi-check-circle-fill me-2"></i> ¡Tu cita ha sido
        generada exitosamente!
      </div>

      <form id="formReserva" className="form-section">
        <h5>
          <i className="bi bi-geo-alt-fill me-2"></i>Dirección del Taller
        </h5>
        <div className="row g-3 mb-4">
          <div className="col-md-12">
            <input
              type="text"
              className="form-control bg-light"
              value="Av. del Ejército 867"
              readonly
            />
          </div>
        </div>

        <h5>
          <i className="bi bi-car-front-fill me-2"></i>Detalles del Vehículo
        </h5>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <input
              id="marca"
              type="text"
              className="form-control"
              placeholder="Marca"
              required
            />
          </div>
          <div className="col-md-6">
            <select id="modelo" className="form-select" required>
              <option selected disabled>
                Seleccione Modelo
              </option>
              <option>Toyota Corolla</option>
              <option>Hyundai Tucson</option>
              <option>Chevrolet Onix</option>
              <option>Kia Rio</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              id="anio"
              type="number"
              className="form-control"
              placeholder="Año"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              id="placa"
              type="text"
              className="form-control"
              placeholder="Placa"
              required
            />
          </div>
        </div>

        <h5>
          <i className="bi bi-calendar-date-fill me-2"></i>Detalles de la Cita
        </h5>
        <div className="row g-3 mb-4">
          <div className="col-md-12">
            <select id="servicio" className="form-select" required>
              <option selected disabled>
                Seleccione el Tipo de Servicio
              </option>
              <option>Láminas de Seguridad</option>
              <option>Instalación de Parabrisas</option>
              <option>Instalación de laterales y lunetas</option>
              <option>Láminas Polarizadas</option>
            </select>
          </div>

          <div className="col-md-6">
            <input
              id="fechaCita"
              type="date"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6">
            <select id="horaCita" className="form-select" required>
              <option selected disabled>
                Seleccione la Hora de su Cita
              </option>
              <option>09:00 a.m.</option>
              <option>10:30 a.m.</option>
              <option>12:00 p.m.</option>
              <option>03:00 p.m.</option>
              <option>05:00 p.m.</option>
            </select>
          </div>
        </div>

        <h5>
          <i className="bi bi-chat-left-dots-fill me-2"></i>Notas Adicionales
        </h5>
        <div className="mb-4">
          <textarea
            id="nota"
            className="form-control"
            rows="3"
            placeholder="Escribe alguna observación del vehiculo..."
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </>
  );
};
