import React from "react";

import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

function RequireAuth({ children }) {
  let isLoggedIn = useSelector((state) => state.userData.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
}

export default RequireAuth;
