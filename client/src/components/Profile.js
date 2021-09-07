import React from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../utilities";
import InputForm from "./InputForm";

const Profile = (props) => {
  //const { user } = props.location.state;
  const user = getCurrentUser();
  const { orders } = user;
  console.log(user);
  return (
    <div className="lg:w-1/2 lg:m-auto md:mx-10 mx-5">
      <div className="lg:w-3/4 w-full my-10">
        <div className="rounded-full">
          <p className="w-16 h-16 flex justify-center items-center rounded-full p-px bg-gray-200 text-4xl text-gray-600 font-semibold">
            {user.name.charAt(0).toUpperCase()}
          </p>
        </div>
        <p className="text-xl font-semibold text-gray-500 pt-5">{user.name}</p>
        <Link to="/admin">
          {user.isAdmin && (
            <button className="text-white tracking-wider bg-green-600 rounded mt-5 py-3 px-3 my-4 font-semibold w-full">
              Dashboard
            </button>
          )}
        </Link>
        <Link
          to={{
            pathname: "/myorders",

            state: { orders },
          }}
        >
          <button className="text-white tracking-wider bg-gray-900 rounded mt-5 py-3 px-3 my-4 font-semibold w-full">
            My Orders
          </button>
        </Link>

        <InputForm
          type="text"
          value={""}
          placeholder="********"
          label="Old Password"
          name="old_password"
        />
        <InputForm
          type="text"
          value={""}
          placeholder="********"
          label="New Password"
          name="new_password"
        />

        <button className="text-white tracking-wider bg-gray-600 rounded mt-5 py-3 px-3 my-4 font-semibold w-full">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Profile;
