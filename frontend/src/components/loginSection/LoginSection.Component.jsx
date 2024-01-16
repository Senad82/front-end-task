import { useState } from "react";
import { loginUser, setUserToLocalStorage } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUser } from "../../redux/user.slicer";
import { jwtDecode } from "jwt-decode";

const LoginSectionComponent = () => {
  const [signInObj, setSignInObj] = useState({
    email: "",
    password: "",
  });

  const [validationMsg, setValidationMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSignInObj = (e) => {
    let newStateObj = signInObj;
    newStateObj[e.target.name] = e.target.value;
    setSignInObj(newStateObj);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLoginSubmit = () => {
    if (!signInObj.email || !signInObj.email) {
      return setValidationMsg(
        `Required field: ${!signInObj.email ? "email" : "password"}`
      );
    }
    if (signInObj.email.length < 3 || signInObj.email.length > 20) {
      return setValidationMsg(`email: required, min: 3, max: 20`);
    }
    if (signInObj.password.length < 5 || signInObj.password.length > 20) {
      return setValidationMsg(`Password: required, min: 6, max: 20`);
    } else {
      setValidationMsg("");
      loginUser(signInObj)
        .then((res) => {
          const token = res.data.access_token;
          const decoded = jwtDecode(token);
          console.log("response...", res);
          if (res.status === 401) {
            setErrMsg(res.data);
            console.log(res.status);
            return;
          } else {
            setUserToLocalStorage(decoded);
            dispatch(saveUser(decoded));
            navigate("/account");
          }
        })
        .catch((err) => {
          console.log("error...", err);
          if (err) {
            setErrMsg("User don't exist! Try again.");
          }
        })
        .finally(() => {});
    }
  };

  return (
    <>
      <h1 className="page-title text-center">Login to your account</h1>
      <div className="form-wrapper my-4">
        <div className="login-form form-control w-50 p-3">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={(e) => handleSignInObj(e)}
              placeholder="email"
            />
          </div>
          <div className=" mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={(e) => handleSignInObj(e)}
              placeholder="Password"
            />
          </div>

          {validationMsg ? (
            <p className="alert alert-danger">{validationMsg}</p>
          ) : null}

          {errMsg ? <p className="alert alert-danger">{errMsg}</p> : null}

          <button
            onClick={onLoginSubmit}
            className="btn btn-primary form-control"
          >
            Login
          </button>
          <Link to="/register">Don't have account? Register</Link>
        </div>
      </div>
    </>
  );
};

export default LoginSectionComponent;
