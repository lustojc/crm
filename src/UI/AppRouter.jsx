import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../components/route";

const AppRouter = () => {
    
  return (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          element={route.component}
          path={route.path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
