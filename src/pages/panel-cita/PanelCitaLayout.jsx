import { Link, Outlet } from "react-router";
import "./panel-cita.css";
export const PanelCitaLayout = () => {
  const navLinks = [
    {
      iconclassName: "bi bi-house-door",
      label: "Inicio",
      href: "/panel-citas",
    },
    {
      iconclassName: "bi bi-calendar-plus",
      label: "Nueva cita",
      href: "/panel-citas/nueva-cita",
    },
    {
      iconclassName: "bi bi-calendar-event",
      label: "Mis Citas",
      href: "/panel-citas/mis-citas",
    },
    {
      iconclassName: "bi bi-question-circle",
      label: "Ayuda",
      href: "/panel-citas/help",
    },
  ];

  const logout = () => {
    console.log("logout");
  };

  return (
    <>
      <div className="sidebar d-flex flex-column">
        <div className="text-center mb-4">
          <img src="/img/logo.png" alt="glassimport" width="120" />
        </div>
        <ul>
          {navLinks.map(({ href, iconclassName, label }, i) => (
            <li className="list" key={i}>
              <Link to={href}>
                <i className={iconclassName}>{label}</i>
              </Link>
            </li>
          ))}
          <li className="list list-end" onClick={logout}>
            <a>
              <i className="bi bi-box-arrow-right">Cerrar Sesión</i>
            </a>
          </li>
        </ul>

        <div className="mt-auto text-center small text-muted p-3">
          <p>
            ¿Tienes alguna duda?
            <br />
            ventas@glassimport.net
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=51972771795&text=%C2%A1Hola%2C+Glass+Import%21+Quiero+solucionar+los+problemas+con+mis+lunas.%20&type=phone_number&app_absent=0"
            className="whatsapp-btn"
            target="_blank"
          >
            <i className="bi bi-whatsapp"></i> Whatsapp
          </a>
        </div>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};
