import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout";
import { HomePage } from "../pages/home";
import { AuthPage } from "../pages/auth";
import { SignUpPage } from "../pages/sign-up";
import { MyLostPetPage } from "../pages/my-lost-pet";
import { PublishLostPetPage } from "../pages/publish-lost-pet";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="mylostpet" element={<MyLostPetPage />} />
        <Route path="reportpet" element={<PublishLostPetPage />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };
