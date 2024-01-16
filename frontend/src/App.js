import axios from "axios";
import { Outlet } from "react-router-dom";
import NavSectionComponent from "./components/nav/NavSection.Component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "./redux/user.slicer";

// axios.defaults.baseURL = "https://junior-test.mntzdevs.com/api";
axios.defaults.baseURL = "https://api.escuelajs.co/api/v1/auth"; //base URL from https://fakeapi.platzi.com/en/rest/auth-jwt/

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(localStorage.getItem("fe_user"));
    let userLocalStorageStr = localStorage.getItem("fe_user")
    if(userLocalStorageStr){
      dispatch(saveUser(JSON.parse(userLocalStorageStr)))
    }
  }, [])
  return (
    <>
      <div className="container">
        <NavSectionComponent />
        <Outlet />
      </div>
    </>
  );
}

export default App;
