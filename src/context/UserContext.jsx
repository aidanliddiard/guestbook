import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: null });

  const login = (email, password) => {
    console.log('login', email, password);
    if (email === 'a@a.com' && password === '123456') {
      setUser({ email });
    } else {
      throw new Error('Invalid Credentials');
    }
  };

  const logout = () => {
    setUser({ email: null });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
