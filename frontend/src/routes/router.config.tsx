import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import * as path from "./path";

const NotFound = lazy(() => import("../pages/NotFound"));
const Tasks = lazy(() => import("../pages/Tasks"));
const Login = lazy(() => import("../pages/Login"));

const routes: RouteObject[] = [
  {
    path: path.LOGIN,
    element: <Login />,
  },
  {
    path: path.TASKS,
    element: <Tasks />,
  },
  {
    path: path.ANY,
    element: <NotFound />,
  },
];

export default routes;
