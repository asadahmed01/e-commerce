import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "../utilities";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = getCurrentUser();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user.isAdmin) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/NotFound",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
