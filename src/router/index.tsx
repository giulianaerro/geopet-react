import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout";
import { HomePage } from "../pages/home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };
