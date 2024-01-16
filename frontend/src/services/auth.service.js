import axios from "axios";

export const loginUser = (data) => axios.post("/login/", data);

export const setUserToLocalStorage = (userObj) =>
  localStorage.setItem("fe_user", JSON.stringify(userObj));

  export const removeUserFromLocalStorage = () => localStorage.removeItem("fe_user")