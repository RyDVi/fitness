import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { paths } from "./paths";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { IsAuthorized } from "../components/IsAuthorized";

export const Router = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route
        path={paths.home.pattern}
        element={
          <IsAuthorized fallback={() => <Navigate to={paths.login({})} />}>
            <Home />
          </IsAuthorized>
        }
      />
      <Route
        path={paths.login.pattern}
        element={
          <IsAuthorized fallback={() => <Login />}>
            <Navigate to={paths.home({})} />
          </IsAuthorized>
        }
      />
    </Routes>
  </BrowserRouter>
);
