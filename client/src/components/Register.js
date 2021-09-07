import axios from "axios";
import React, { useState } from "react";
import InputForm from "./InputForm";

const Register = () => {
  const [signupInfo, setSigninInfo] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const { email, name, password } = signupInfo;
    // if (email === "" || name === "" || password === "") {
    //   return setError("all fields are required.");
    // }
    // if (password.length < 5)
    //   return setError("password must be atleast 5 characters long");
    //make api call to the server
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/register`, {
        name: signupInfo.name,
        email: signupInfo.email,
        password: signupInfo.password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === 400)
          return setError(response.data.message);
        setError("");
        window.location.pathname = "/signin";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="lg:m-auto lg:w-1/2 w-full">
      <form className="w-full px-5 mt-10" onSubmit={handleSubmit}>
        <p className="text-2xl pb-5 font-semibold">Sign Up here</p>
        <InputForm
          type="text"
          value={signupInfo.name}
          placeholder="Full Name"
          label="Full Name"
          name="name"
          onChange={(e) =>
            setSigninInfo({ ...signupInfo, name: e.target.value })
          }
        />

        <InputForm
          type="text"
          value={signupInfo.email}
          placeholder="example@something.com"
          label="Email Address"
          name="email"
          onChange={(e) =>
            setSigninInfo({ ...signupInfo, email: e.target.value })
          }
        />

        <InputForm
          type="password"
          value={signupInfo.password}
          placeholder="********"
          label="Password"
          name="password"
          onChange={(e) =>
            setSigninInfo({ ...signupInfo, password: e.target.value })
          }
        />
        <div>
          <p className="text-red-600">{error}</p>
        </div>
        <button
          className="w-full px-4 py-2 text-white tracking-wider bg-gray-900 rounded mt-10 font-semibold"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
