import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  useEffect(() => {
    restoreSession();
  }, []);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const loginResponse = await api.post('/auth/login', { email, password });
      const token = loginResponse.data.token;
      await AsyncStorage.setItem('token', loginResponse.data.token);
      const profileResponse = await api.get('/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(profileResponse.data.user);
      return loginResponse;
    } catch (error) {
      throw error;
    }
  };

  const restoreSession = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      if (!token) {
        setLoading(false);
        return;
      }

      const profileResponse = await api.get('/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(profileResponse.data.user);
    } catch (error) {
      await AsyncStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
