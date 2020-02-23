import { useCallback, useState, useEffect } from 'react';

const storageName = 'chat';

export const useAuth = () => {
  const [name, setName] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const login = useCallback((userLogin) => {
    setName(userLogin);
    setIsAuth(true);
    localStorage.setItem(storageName, JSON.stringify({ name: userLogin }));
  }, []);

  const logout = useCallback(() => {
    setName(null);
    setIsAuth(false);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.name) {
      login(data.name);
    }
  }, [login]);

  return {
    name, isAuth, login, logout, setIsAuth,
  };
};
