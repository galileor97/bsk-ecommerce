import React, { useEffect, useState } from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import DetailPage from "./pages/DetailPage";



const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/:id',
        element: <DetailPage />
      },
      {
        path: '*',
        element: <h1>Not Found 404</h1>
      }
    ]
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
