import { Link } from "react-router-dom";

const RegisterSectionComponent = () => {


  return (
    <>
      <h1 className="page-title text-center">Create your account</h1>
      <div className="form-wrapper my-4">
        <div className="login-form form-control w-50 p-3">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              // onChange={(e) => handleSignInObj(e)}
              placeholder="Username"
            />
          </div>
          <div className=" mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              // onChange={(e) => handleSignInObj(e)}
              placeholder="Password"
            />
          </div>
          <div className=" mb-3">
            <input
              type="password"
              className="form-control"
              name="repeatPassword"
              id="repeatPassword"
              // onChange={(e) => handleSignInObj(e)}
              placeholder="Repeat password"
            />
          </div>
          <div className=" mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="newsletter"
              id="newsletter"
              // onChange={(e) => handleSignInObj(e)}
              value={false}
            />
            <label className="form-check-label ms-3" htmlFor="newsletter">
              Subscribe to newsletter
            </label>
          </div>

          {/* Radio selection */}
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="other"
              value="other"
            />
            <label className="form-check-label" htmlFor="other">
              Other
            </label>
          </div>

          {/* Dropdown selection*/}
          <label className="form-control">
            Status:
            <select className="form-select" >
              <option value="grapefruit">Active</option>
              <option value="lime">Inactive</option>
            </select>
          </label>
          <label className="form-check-label ms-2" htmlFor="dateOfBirth">
            Year of Birth
          </label>
          <div className=" mb-3">
            <input
              type="date"
              className="form-control"
              name="dateOfBirth"
              id="dateOfBirth"
              // onChange={(e) => handleSignInObj(e)}
              placeholder="Year of birth"
            />
          </div>

          {/* {validationMsg ? (
            <p className="alert alert-danger">{validationMsg}</p>
          ) : null} */}

          {/* {errMsg ? <p className="alert alert-danger">{errMsg}</p> : null} */}

          <button
            // onClick={onLoginSubmit}
            className="btn btn-primary form-control"
          >
            Login
          </button>
          <Link to="/login">Have account? Login</Link>
        </div>
      </div>
    </>
  );
};

export default RegisterSectionComponent;
