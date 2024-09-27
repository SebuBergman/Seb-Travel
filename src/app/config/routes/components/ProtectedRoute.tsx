import { selectAuth } from "@features/auth/store/authSlice";
import Loader from "@features/ui/Loader";
import { useAppSelector } from "@store/index";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element;
}
export default function RequireAuth({ children }:  Props) {
  const auth = useAppSelector(selectAuth);
  const location = useLocation();

  if (auth.status === "loading" || auth.status === "idle") {
    return <Loader /> 
  }

  /*if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }*/

  return children;
}
