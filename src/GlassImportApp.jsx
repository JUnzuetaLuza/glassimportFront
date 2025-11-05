import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/AppRouter";

export const GlassImportApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
