import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components.jsx/Home";
import About from "./Components.jsx/About";
import Dashboard from "./Components.jsx/Dashboard";
import NavBar from "./Components.jsx/NavBar";



const router = createBrowserRouter(
  [
    {
    path: "/",
    element: 
      <div>
        <NavBar />
        <Home />
      </div>
    },


    {
    path: "/about",
    element: 
      <div>
        <NavBar />
        <About/>
      </div>
    },

     {
    path: "/dashboard",
    element: 
      <div>
        <NavBar />
        <Dashboard />
      </div>
    },
  ]);


function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
