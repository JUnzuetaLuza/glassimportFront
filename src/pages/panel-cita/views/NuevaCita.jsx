import { useRef, useEffect, useState } from "react";
import { useVehiculos } from "../../../hooks/useVehiculos";

export const NuevaCita = () => {
  
  const { marcas, modelos, cargarModelos, loadingModelos } = useVehiculos();
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [placa, setPlaca] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showSugerencias, setShowSugerencias] = useState(false);
  const sugerenciasRef = useRef();

  const marcasFiltradas = marca
    ? marcas
        .filter((m) => m.toLowerCase().startsWith(marca.toLowerCase()))
        .slice(0, 10)
    : [];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sugerenciasRef.current &&
        !sugerenciasRef.current.contains(event.target)
      ) {
        setShowSugerencias(false);
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMarcaChange = (e) => {
    setMarca(e.target.value);
    setShowSugerencias(true);
  };

  const handleMarcaSelect = (m) => {
    setMarca(m);
    cargarModelos(m);
    setShowSugerencias(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faltan validaciones?
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  };

  return (
    <>
      <div className="welcome-card mb-4 text-center">
        <h2>¡Reserva tu Próxima Cita!</h2>
        <p className="text-secondary">
          Completa los datos para agendar tu visita al taller.
        </p>
      </div>

      {showAlert && (
        <div
          className="alert alert-success text-center shadow-sm"
          id="alertaCita"
        >
          <i className="bi bi-check-circle-fill me-2"></i> ¡Tu cita ha sido
          generada exitosamente!
        </div>
      )}

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
          <div
            className="col-md-6"
            style={{ position: "relative" }}
            ref={sugerenciasRef}
          >
            <input
              id="marca"
              type="text"
              className="form-control"
              placeholder="Marca"
              required
              value={marca}
              onChange={handleMarcaChange}
              autoComplete="off"
              onFocus={() => setShowSugerencias(true)}
            />
            {showSugerencias && marca && marcasFiltradas.length > 0 && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  zIndex: 1000,
                  background: "white",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  margin: "4px 0 0 0",
                  padding: 0,
                  listStyle: "none",
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
                {marcasFiltradas.map((m) => (
                  <li
                    key={m}
                    style={{ padding: "8px 12px", cursor: "pointer" }}
                    onMouseDown={() => handleMarcaSelect(m)}
                  >
                    {m}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-md-6">
            <select
              id="modelo"
              className="form-select"
              required
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              disabled={!modelos.length}
            >
              <option value="" disabled>
                {loadingModelos ? "Cargando modelos..." : "Seleccione Modelo"}
              </option>
              {modelos.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
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
