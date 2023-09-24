import {
  AxiosContext,
  createRequestInstance,
  getCsrfConfig,
} from "@modules/axios-request";
import "./App.css";
import { Theme, ThemeLoader, ThemeSaver } from "@modules/theme";
import { Box } from "@mui/material";
import { Router } from "./routes/Routes";
import { useMemo } from "react";

function App() {
  const fintessServerAxionInstance = useMemo(
    () =>
      createRequestInstance(
        getCsrfConfig(import.meta.env.VITE_SERVER_URL, ""),
        true
      ),
    []
  );
  const googleAxiosInstance = useMemo(
    () =>
      createRequestInstance(
        getCsrfConfig(import.meta.env.VITE_GOOGLE_URL, ""),
        true
      ),
    []
  );
  return (
    <Theme defaultTheme="dark">
      <ThemeSaver />
      <ThemeLoader />
      <AxiosContext.Provider
        value={{
          fitness_server: fintessServerAxionInstance,
          google: googleAxiosInstance,
        }}
      >
        <Box sx={{ backgroundColor: "primary.main" }}>test</Box>
        <Router />
      </AxiosContext.Provider>
    </Theme>
  );
}

export default App;
