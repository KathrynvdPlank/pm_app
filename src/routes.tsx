import type { JSX } from "react";
import Dashboard from "./pages/Dashboard";

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
];