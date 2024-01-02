import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ElementAboutPage } from "./screens/ElementAboutPage";
import { Frame } from "./screens/Frame";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ElementAboutPage />,
  },
  {
    path: "/1280px-about-page-all-breakpoints",
    element: <ElementAboutPage />,
  },
  {
    path: "/frame-2",
    element: <Frame />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
