import App from "../App";
import AccountPageComponent from "../pages/AccountPageComponent";
import HomePageComponent from "../pages/HomePage.Component";
import LoginPageComponent from "../pages/LoginPage.Component";
import ProductsPageComponent from "../pages/ProductsPage.Component";
import RegisterPageComponent from "../pages/RegisterPage.Component";

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
        path: "/account",
        element: <AccountPageComponent />,
      },
      {
        path: "/products",
        element: <ProductsPageComponent />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPageComponent />,
  },
  {
    path: "/register",
    element: <RegisterPageComponent />,
  },
];

export default Routes;
