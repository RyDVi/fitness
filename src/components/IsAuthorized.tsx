import { useLocalStorage } from "@modules/hooks";
import { GOOGLE_AUTH_DATA, getInitialAuthData } from "../constants";
import { GoogleAuthData } from "../types";

export const IsAuthorized = ({ children, fallback: Fallback }) => {
  const [googleAuth] = useLocalStorage<GoogleAuthData>(
    GOOGLE_AUTH_DATA,
    getInitialAuthData()
  );
  if (!googleAuth.access_token) {
    return <Fallback />;
  }
  return children;
};
