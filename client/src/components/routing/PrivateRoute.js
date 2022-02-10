import React, { useContext, Fragment } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return !isAuthenticated && !loading ? (
    <Navigate replace to='/login' />
  ) : (
    children
  );
};

export default PrivateRoute;
