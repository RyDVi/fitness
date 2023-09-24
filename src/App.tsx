import {
  AxiosContext,
  createRequestInstance,
  getCsrfConfig,
} from "@modules/axios-request";
import { Theme, ThemeLoader, ThemeSaver } from "@modules/theme";
import { Router } from "./routes/Routes";
import { useMemo } from "react";
import { useLocalStorage } from "@modules/hooks";
import { FitnessAuthData, GoogleAuthData } from "./types";
import {
  FITNESS_AUTH_DATA,
  GOOGLE_AUTH_DATA,
  getInitialAuthData,
} from "./constants";
import { PageContainer } from "./pages/PageContainer";
import { SnackbarProvider } from "notistack";

function App() {
  const [googleAuth] = useLocalStorage<GoogleAuthData>(
    GOOGLE_AUTH_DATA,
    getInitialAuthData()
  );
  const [fitnessAuth] = useLocalStorage<FitnessAuthData>(
    FITNESS_AUTH_DATA,
    getInitialAuthData()
  );
  const fintessServerAxionInstance = useMemo(
    () =>
      createRequestInstance(
        getCsrfConfig(
          import.meta.env.VITE_FITNESS_SERVER_URL,
          fitnessAuth.access_token
        ),
        true
      ),
    [fitnessAuth.access_token]
  );
  const googleAxiosInstance = useMemo(
    () =>
      createRequestInstance(
        getCsrfConfig(import.meta.env.VITE_GOOGLE_URL, googleAuth.access_token),
        true
      ),
    [googleAuth.access_token]
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
        <SnackbarProvider maxSnack={5}>
          <PageContainer>
            <Router />
          </PageContainer>
        </SnackbarProvider>
      </AxiosContext.Provider>
    </Theme>
  );
}

export default App;
