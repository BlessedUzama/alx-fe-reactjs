import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <component /> : <Navigate to="/login" />}
    />
  );
}

export default ProtectedRoute
