import { useCallback, useState, useEffect } from 'react';

const storageName = 'chat';

const defUsers = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Vasya' },
  { id: 4, name: 'Andrey' },
  { id: 5, name: 'Aleona' },
  { id: 6, name: 'Timofey' },
  { id: 7, name: 'Sasha' },
  { id: 8, name: 'Kuzya' },
  { id: 9, name: 'Leman' },
  { id: 10, name: 'qwerty' },
  { id: 11, name: 'Sima' },
  { id: 12, name: 'Veronika' },
  { id: 13, name: 'Anton' }];

export const useAuth = () => {
  const [name, setName] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [users] = useState(defUsers);

  const login = useCallback((userLogin) => {
    setName(userLogin);
    setIsAuth(true);
    localStorage.setItem(storageName, JSON.stringify({ name: userLogin }));
  }, []);

  const logout = useCallback(() => {
    setName(null);
    setIsAuth(false);
    localStorage.removeItem(storageName);
    window.location.reload();
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.name) {
      login(data.name);
    }
  }, [login]);

  return {
    name, isAuth, login, logout, setIsAuth, users,
  };
};
