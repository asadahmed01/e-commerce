import React from "react";
import { logout } from "../utilities";

const Logout = () => {
  logout();
  window.location = "/";

  return (
    <div className="min-h-screen text-center mt-40 text-3xl">
      {" "}
      Logging out ...
    </div>
  );
};

export default Logout;
