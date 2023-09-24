import { AxiosContext, createRequestInstance, getCsrfConfig } from '@modules/axios-hooks';
import './App.css'
import {} from '@modules/hooks'
import { Theme, ThemeLoader, ThemeSaver } from '@modules/theme';
import { SWRConfig } from 'swr';
import { Box } from '@mui/material'

const axiosInstance = createRequestInstance(
  getCsrfConfig(import.meta.env.VITE_SERVER_URL),
  true
);

function App() {

  return (
      <Theme defaultTheme="dark">
        <ThemeSaver />
        <ThemeLoader />
        <SWRConfig
          value={{
            fetcher: async (resource: string | [string, any], init) => {
              if (typeof resource === "string") {
                const res = await axiosInstance.get(resource, init);
                return res.data;
              }
              if (typeof resource === "object") {
                const res_1 = await axiosInstance.get(resource[0], resource[1]);
                return res_1.data;
              }
              throw new Error("I don't know how to process this resource");
            },
          }}
        >
          <AxiosContext.Provider value={axiosInstance}>
            <Box sx={{backgroundColor: 'primary.main'}}>test</Box>
          </AxiosContext.Provider>
        </SWRConfig>
      </Theme>
  )
}

export default App
