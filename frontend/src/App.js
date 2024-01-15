import axios from "axios";
import { Outlet } from "react-router-dom";
import NavSectionComponent from "./components/nav/NavSection.Component";

axios.defaults.baseURL = "https://junior-test.mntzdevs.com/api";

function App() {
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
