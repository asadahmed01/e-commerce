import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InputForm from "./InputForm";

const Login = () => {
  const [singinInfo, setSigninInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/login`, {
        name: singinInfo.name,
        email: singinInfo.email,
        password: singinInfo.password,
      })
      .then((response) => {
        const { data } = response;
        if (data.status === 400 || data.status === 500)
          return setError(response.data.msg);

        setError("");
        localStorage.setItem("token", response.data.jwt);
        //window.location.pathname = "/cart";
        history.push("/cart");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="lg:m-auto lg:w-1/2 w-full">
      <form className="w-full px-5 mt-10" onSubmit={handleSubmit}>
        <p className="text-2xl pb-5 font-semibold">Login here</p>
        <InputForm
          type="text"
          value={singinInfo.email}
          placeholder="example@something.com"
          label="Email Address"
          name="email"
          onChange={(e) =>
            setSigninInfo({ ...singinInfo, email: e.target.value })
          }
        />

        <InputForm
          type="password"
          value={singinInfo.password}
          placeholder="********"
          label="Password"
          name="password"
          onChange={(e) =>
            setSigninInfo({ ...singinInfo, password: e.target.value })
          }
        />
        <div>
          <p className="text-red-500">{error}</p>
        </div>

        <button
          className="w-full px-4 py-2 text-white tracking-wider bg-gray-900 rounded mt-10 font-semibold"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
