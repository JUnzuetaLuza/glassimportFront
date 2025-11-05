import { Route, Routes } from "react-router";
import { LoginPage } from "../pages/auth/LoginPage";
import { LandingPageLayout } from "../pages/landing-page/LandingPageLayout";
import { ContactPage } from "../pages/landing-page/views/ContactPage";
import { HomePage } from "../pages/landing-page/views/HomePage";
import { ServiciosPage } from "../pages/landing-page/views/ServiciosPage";
import { PanelCitaLayout } from "../pages/panel-cita/PanelCitaLayout";
import { InicioPanelCita } from "../pages/panel-cita/views/InicioPanelCita";
import { MisCitas } from "../pages/panel-cita/views/MisCitas";
import { NuevaCita } from "../pages/panel-cita/views/NuevaCita";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
      </Route>
      <Route path="/auth">
        <Route index element={<LoginPage />} />
      </Route>
      <Route path="/panel-citas" element={<PanelCitaLayout />}>
        <Route index element={<InicioPanelCita />} />
        <Route path="/panel-citas/mis-citas" element={<MisCitas />} />
        <Route path="/panel-citas/nueva-cita" element={<NuevaCita />} />
        <Route path="/panel-citas/help" element={<h1>Nothing</h1>} />
      </Route>
    </Routes>
  );
};
