import type { JSX } from "react";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import PowerUsage from "./pages/PowerUsage";

export interface AppRoute {
  path: string;
  name: string;
  element: JSX.Element;
}

export const routes: AppRoute[] = [
  {
    path: "/",
    name: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/PowerUsage",
    name: "Power Usage",
    element: <PowerUsage />,
  },
  {
    path: "/Alerts",
    name: "Alerts",
    element: <Alerts />,
  },
];
