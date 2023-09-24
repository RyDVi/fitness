import { Routes, Route } from "react-router-dom";
import { paths } from "./paths";

export const Router = () => (
  <Routes>
    <Route path={paths.home.pattern} element={<></>} />
  </Routes>
);
