import { Routes, Route, BrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import { Home } from "../pages/Home";

export const Router = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path={paths.home.pattern} element={<Home />} />
    </Routes>
  </BrowserRouter>
);
