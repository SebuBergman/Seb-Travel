import { Link, Outlet, Route, Routes } from 'react-router-dom';

import Home from "@pages/home";
import AuthLayout from "@features/ui/layout/AuthLayout";
import Login from "@pages/login";
import SignUp from "@pages/sign-up";
import NotFoundPage from '@pages/not-found';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<AuthLayout />}>
            <Route element={<SignUp />} />
            <Route element={<Login />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App
