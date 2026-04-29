import React from "react"
import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import HomePage from "./pages/Home.tsx"
import CountryInfo from "./pages/CountryInfo.tsx"
import { countryLoader } from "./components/countryLoader.tsx"

import "./index.css"
import MainLayout from "./components/MainLayout.tsx"

// Define app routes. MainLayout wraps all routes and renders the shared Navbar.
// The /:postId route uses countryLoader to fetch country data before rendering.
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/:postId",
        element: <CountryInfo />,
        loader: countryLoader,
        errorElement: <p>Country not found</p>
      }
    ]
  }
])

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
