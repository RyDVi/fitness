import { useAxiosContext } from "@modules/axios-request";
import { useEstimatedSteps } from "@modules/google";
import { Box, Button } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";

export const Home = () => {
  const googleAxiosInstance = useAxiosContext("google");
  const { data, request, response } = useEstimatedSteps(
    new Date("2023-09-23"),
    new Date("2023-09-24")
  );
  const login = useGoogleLogin({
    onSuccess: (credentials) => {
      console.log(credentials);
      googleAxiosInstance.defaults.headers[
        "Authorization"
      ] = `Bearer ${credentials.access_token}`;
      request();
    },
    onError: (error) => {
      console.log(error);
    },
    scope:
      "email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/fitness.activity.read",
  });
  console.log(data, response);
  console.log(response?.data?.bucket?.length && 
    response.data.bucket[0].dataset[0].point.reduce(
      (summ, currPoint) => summ + currPoint.value[0].intVal,
      0
    )
  );
  return (
    <Box>
      <Button onClick={() => login()}>Google auth</Button>
    </Box>
  );
};
