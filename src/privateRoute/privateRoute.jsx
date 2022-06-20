import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ isAuthiticated, children }) => {
    return isAuthiticated ? children : <Navigate to="/login"></Navigate>;
};
