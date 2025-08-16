import { useAuth } from './useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAdminAuth = () => {
  const { user, userRole, isLoading } = useAuth();
  const navigate = useNavigate();
  
  const isAdmin = userRole === 'admin';
  const isModerator = userRole === 'moderator' || isAdmin;

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate('/login');
    }
  }, [user, userRole, isLoading, isAdmin, navigate]);

  return { 
    user, 
    userRole, 
    isLoading, 
    isAdmin, 
    isModerator,
    hasAdminAccess: isAdmin 
  };
};