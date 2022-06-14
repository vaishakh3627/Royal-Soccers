import React from "react";
import { Route, Routes } from "react-router-dom";

import RequireAuth from "./RequireAuth";
import User from "./container/user/User";
import Soccer from "./container/user/Soccer";
import SuperMarket from "./container/user/SuperMarket";
import CoffeeShop from "./container/user/CoffeeShop";
import LogIn from "./container/LogIn";
import Admin from "./container/admin/Admin";
import AdminSoccer from "./container/admin/AdminSoccer";
import AdminSuperMarket from "./container/admin/AdminSuperMarket";
import AdminCoffeShop from "./container/admin/AdminCoffeeShop";

const ApplicationRoutes = () => {
  const userRoutes = [
    {
      path: "/user",
      component: <User />,
      auth: true,
    },
    {
      path: "/user/soccer",
      component: <Soccer />,
      auth: true,
    },
    {
      path: "/user/supermarket",
      component: <SuperMarket />,
      auth: true,
    },
    {
      path: "/user/coffeeshop",
      component: <CoffeeShop />,
      auth: true,
    },
    {
      path: "/admin",
      component: <Admin />,
      auth: true,
    },
    {
      path: "/admin/soccer",
      component: <AdminSoccer />,
      auth: true,
    },
    {
      path: "/admin/supermarket",
      component: <AdminSuperMarket />,
      auth: true,
    },
    {
      path: "/admin/coffeeshop",
      component: <AdminCoffeShop />,
      auth: true,
    },
    {
      path: "/",
      component: <LogIn />,
    },
  ];

  return (
    <Routes>
      {userRoutes.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          element={
            item.auth ? (
              <RequireAuth>{item.component}</RequireAuth>
            ) : (
              item.component
            )
          }
        />
      ))}
    </Routes>
  );
};
export default ApplicationRoutes;
