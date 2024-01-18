import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoutes = () => {
  const userStore = useSelector((state) => state.userStore.user);

  return userStore ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoutes;
