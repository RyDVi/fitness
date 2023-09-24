import { Paper, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useGoogleLogin } from "@react-oauth/google";
import { useSnackbar } from "notistack";
import { useAxiosContext } from "@modules/axios-request";
import { GOOGLE_AUTH_DATA } from "../constants";
import { useLocalStorage } from "@modules/hooks";
import { GoogleAuthData } from "../types";

const GoogleAuthButton = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [, setGoogleAuth] = useLocalStorage<GoogleAuthData>(
    GOOGLE_AUTH_DATA,
    null as any
  );
  const googleAxiosInstance = useAxiosContext("google");
  const login = useGoogleLogin({
    onSuccess: (credentials) => {
      console.log(credentials);
      googleAxiosInstance.defaults.headers[
        "Authorization"
      ] = `Bearer ${credentials.access_token}`;
      setGoogleAuth(credentials);
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar({ message: error.error, variant: "error" });
    },
    scope:
      "email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/fitness.activity.read",
  });
  return (
    <Button
      variant="contained"
      startIcon={<GoogleIcon />}
      onClick={() => login()}
    >
      Войти через Google
    </Button>
  );
};

export const Login = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <GoogleAuthButton />
    </Paper>
  );
};
