import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  if (localStorage.access_token) {
    return <Navigate to='/' />;
  }
  return children;
}

export function ProtectedRouteToLogin({ children }) {
  if (!localStorage.access_token) {
    return <Navigate to='/login' />;
  }
  return children;
}
