import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/auth");
  };
  return (
    <>
      <section className="hero">
        <h1>LUNAS PERFECTAS, MANEJO SEGURO</h1>
        <img src="img/lunacocheopel.jpg" alt="Car" />
      </section>

      <section className="info-glass py-5 bg-white">
        <div className="container d-flex flex-wrap align-items-center justify-content-between">
          <div className="text-section col-md-6">
            <h2 className="fw-bold mb-3">
              Encuentra el cuidado ideal para tu auto
            </h2>
            <p className="text-muted mb-4">
              En <strong>Glass Import</strong> somos especialistas en
              instalación y reparación de lunas, parabrisas y vidrios
              automotrices. Ofrecemos productos de alta calidad y un servicio
              rápido, profesional y garantizado.
            </p>

            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-shield-check text-primary fs-4 me-3"></i>
              <div>
                <h6 className="fw-semibold mb-0">Seguridad Garantizada</h6>
                <small className="text-muted">
                  Usamos materiales certificados que aseguran tu visibilidad y
                  protección.
                </small>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <i className="bi bi-tools text-primary fs-4 me-3"></i>
              <div>
                <h6 className="fw-semibold mb-0">Servicio Profesional</h6>
                <small className="text-muted">
                  Nuestro equipo técnico capacitado realiza cada instalación con
                  precisión.
                </small>
              </div>
            </div>
          </div>

          <div className="image-section col-md-5 text-center mt-4 mt-md-0">
            <img
              src="img/colocacion.jpeg"
              alt="Instalación de lunas"
              className="img-fluid rounded-5 shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Cuida tu auto con vidrios de primer nivel</h2>
        <p>
          Más de 30 años de experiencia en la instalación de láminas de
          seguridad, polarizados y parabrisas en Lima..
        </p>

        <div className="d-flex justify-content-center gap-3 mb-4">
          <button onClick={navigateToLogin} className="btn btn-primary">
            Registrate
          </button>
          <a href="#" className="btn btn-outline-dark">
            Contactanos
          </a>
        </div>
      </section>

      <section className="featured">
        <h2>Líderes en la instalación de vidrios para tu auto</h2>
        <div className="container">
          <div className="row g-2">
            <div className="col-md-3 col-lg-2 car-card mx-auto">
              <img src="img/carrogris.jpeg" alt="Luxury Sedan" />
              <div className="p-3">
                <p> Protección contra accidentes y robos.</p>
              </div>
            </div>
            <div className="col-md-3 col-lg-2 car-card mx-auto">
              <img src="img/carluna.jpeg" alt="Sports Coupe" />
              <div className="p-3">
                <p>Cuida a tu familia y al auto de los rayos UV al 99%.</p>
              </div>
            </div>
            <div className="col-md-3 col-lg-2 car-card mx-auto">
              <img src="img/lugardos.jpeg" alt="Luxury SUV" />
              <div className="p-3">
                <p>Una empresa 100% confiable. </p>
              </div>
            </div>
            <div className="col-md-3 col-lg-2 car-card mx-auto">
              <img src="img/demostracion.png" alt="Convertible" />
              <div className="p-3">
                <p>
                  Mantén tu carro con la mejor calidad en vidrios del mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pick">
        <h2>Conoce nuestros Servicios </h2>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-3 icon-box">
              <i className="bi bi-check-circle"></i>
              <h5>Easy Process</h5>
              <p>Find your perfect car easily and quickly.</p>
              <button className="btn btn-primary mt-2">Learn More</button>
            </div>
            <div className="col-md-3 icon-box">
              <i className="bi bi-speedometer2"></i>
              <h5>Fast Approval</h5>
              <p>Quick financing and approval options.</p>
              <button className="btn btn-primary mt-2">Learn More</button>
            </div>
            <div className="col-md-3 icon-box">
              <i className="bi bi-truck"></i>
              <h5>Secure Delivery</h5>
              <p>Safe and fast vehicle delivery nationwide.</p>
              <button className="btn btn-primary mt-2">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="test-drive">
        <div className="container">
          <div className="inner">
            <div>
              <h3>FREE TEST DRIVE</h3>
              <p>
                Book a free test drive today and experience the power yourself.
              </p>
              <button className="btn btn-light">Contact Us</button>
            </div>
            <img
              src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
              alt="Test Drive"
            />
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 UniqueCar. All Rights Reserved.</p>
      </footer>
    </>
  );
};
