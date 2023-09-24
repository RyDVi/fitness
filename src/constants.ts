import { AuthData } from "./types";

export const GOOGLE_AUTH_DATA = "googleAuth";
export const FITNESS_AUTH_DATA = "fitnessAuth";

export const getInitialAuthData = (): AuthData => ({
  access_token: "",
});
