import { Route, Routes } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";

import Home from "@pages/home";
import AuthLayout from "@features/ui/layout/AuthLayout";
import Login from "@pages/login";
import SignUp from "@pages/sign-up";
import NotFoundPage from "@pages/not-found";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={AppRoutes.home} element={<Home />} />
      <Route element={<AuthLayout />}>
        <Route path={AppRoutes.signUp} element={<SignUp />} />
        <Route path={AppRoutes.login} element={<Login />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
