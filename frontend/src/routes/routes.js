import App from "../App";
import AccountPageComponent from "../pages/AccountPageComponent";
import HomePageComponent from "../pages/HomePage.Component";
import LoginPageComponent from "../pages/LoginPage.Component";
import ProductsPageComponent from "../pages/ProductsPage.Component";
import RegisterPageComponent from "../pages/RegisterPage.Component";
import Anonymous from "../utils/Anonymous";
import PrivateRoutes from "../utils/PrivateRoutes";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePageComponent />,
      },
      {
        path: "/",
        element: <PrivateRoutes />,
        children: [
          {
            path: "/products",
            element: <ProductsPageComponent />,
          },
          {
            path: "/account",
            element: <AccountPageComponent />,
          },
        ],
      },
      {
        path: "/",
        element: <Anonymous />,
        children: [
          {
            path: "/register",
            element: <RegisterPageComponent />,
          },
          {
            path: "/login",
            element: <LoginPageComponent />,
          },
        ],
      },
    ],
  },
];

export default Routes;
