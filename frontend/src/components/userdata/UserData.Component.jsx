import { jwtDecode } from "jwt-decode";
import React from "react";
import { loginUser } from "../../services/auth.service";

const UserDataComponent = () => {
  loginUser().then((res) => {
    const token = res.data.jwt;
    const decoded = jwtDecode(token);
    console.log(decoded);
  });

  return <div>UserData.Component</div>;
};

export default UserDataComponent;
