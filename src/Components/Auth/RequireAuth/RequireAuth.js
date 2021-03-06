import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <p>loading..</p>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ form: location }} replace />

  }
};

export default RequireAuth;