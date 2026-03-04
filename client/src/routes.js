import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import EmployeeManagement from "./admin/EmployeeManagement";
import StockManagement from "./admin/StockManagement";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import ProtectedRoute from "./components/ProtectedRoute";

export default function Router() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>}
      />
      <Route
        path="/admin/employees"
        element={<ProtectedRoute isAdmin={true}><EmployeeManagement /></ProtectedRoute>}
      />
      <Route
        path="/admin/stock"
        element={<ProtectedRoute isAdmin={true}><StockManagement /></ProtectedRoute>}
      />

      {/* User Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}