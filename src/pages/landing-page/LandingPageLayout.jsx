import { Link, Outlet, useNavigate } from "react-router";
import "./landing-page.css";

export const LandingPageLayout = () => {
  const navigate = useNavigate();
  const navLinks = [
    {
      href: "/",
      label: "inicio",
    },
    {
      href: "/contact",
      label: "¿Quienes somos?",
    },
    {
      href: "/servicios",
      label: "Servicios",
    },
  ];

  const navigateToLogin = () => {
    navigate("/auth");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="img/logo.png" alt="logo" style={{ width: "33%" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {navLinks.map(({ href, label }, i) => (
                <li className="nav-item" key={i}>
                  <Link className="nav-link" to={href}>
                    {label}
                  </Link>
                </li>
              ))}
              <li onClick={navigateToLogin}>
                <a>
                  <button className="btn btn-primary ">Login</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
