import React from "react";
import { useHistory } from "react-router";
import { logout } from "../utilities";

const Logout = () => {
  const history = useHistory();
  logout();

  history.push("/");
  return (
    <div className="min-h-screen text-center mt-40 text-3xl">
      {" "}
      Logging out ...
    </div>
  );
};

export default Logout;
