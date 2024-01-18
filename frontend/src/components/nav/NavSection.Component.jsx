import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeUserFromLocalStorage } from "../../services/auth.service";
import { removeUser } from "../../redux/user.slicer";
import NavbarLinkComponent from "./components/NavbarLink.component";

const NavSectionComponent = () => {
  const userStore = useSelector((state) => state.userStore.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userStore);
  }, [userStore]);

  const onLogOut = () => {
    removeUserFromLocalStorage();
    dispatch(removeUser());
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavbarLinkComponent />
              </li>
              <li className="nav-item">
                {!userStore?.username ? (
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                ) : (
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                {!userStore?.username ? null : (
                  <NavLink className="nav-link" to="/account">
                    {userStore.username} Account
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                {userStore?.username && (
                  <NavLink className="nav-link" to="/account">
                    Id {userStore.id}
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                {!userStore?.username ? (
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                ) : (
                  <NavLink className="nav-link" onClick={(e) => onLogOut()}>
                    Logout
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavSectionComponent;
