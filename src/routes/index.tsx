import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../layout";
import Home from "../pages/home";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<p>loading</p>}>
      <Component {...props} />
    </Suspense>
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
