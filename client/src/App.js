import React from "react";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import Router from "./routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <RouterProvider>
      <Navbar />
      <Router />
    </RouterProvider>
  );
}

export default App;