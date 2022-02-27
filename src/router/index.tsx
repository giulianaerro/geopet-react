import React from "react";
import { Routes, Route } from "react-router-dom";
import { Init } from "../pages/prueba";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Init />}>
        <Route index element={""} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };
