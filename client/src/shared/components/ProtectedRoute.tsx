import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  // ПЕРЕДАВАТЬ isAuthenticated В КАЧЕСТВЕ ЗАВИСИМОСТИ
  // ЧТОБЫ ИСКЛЮЧИТЬ СВЯЗНОСТЬ С useAuth

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default ProtectedRoute;
