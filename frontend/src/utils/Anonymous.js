import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Anonymous = () => {
  const userStore = useSelector((state) => state.userStore.user);

  return userStore ? <Navigate to={"/"} replace /> : <Outlet />;
};

export default Anonymous;
