import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Assuming you're using Redux

// Import your components
import Header from "./Components/Header";
import Index from "./Pages/Index";
import RootLayout from "./Pages/RootLayout";
import MyCourses from "./Pages/MyCourses";
import EnrolledCourses from "./Pages/EnrolledCourses";
// Import your Redux store (if applicable)
import store from "./state"; // Assuming your store file is named state.js

const router = createBrowserRouter({
  element: <RootLayout />,  // Wrap all routes with RootLayout
  children: [
    {
      path: "/",
      element: <Index />, // Replace with your actual home page component
    },
    {
      path: "/my-courses",
      element: <MyCourses />,
    },
    {
      path: "/enrolled-courses",
      element: <EnrolledCourses />,
    },
    // Add other routes for your pages here
  ],
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap application with Redux Provider (if applicable) */}
      <RouterProvider router={router} /> {/* Render Router context */}
    </Provider>
  </React.StrictMode>,
);
