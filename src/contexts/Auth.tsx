import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import useLocalStorage from '../hook/useLocalStorage';

interface AuthState {
  user?: string;
}
interface AuthContext {
  user?: string;
  signIn(name: string): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContext | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  // const [storedUSer, setStoredUser] = useLocalStorage<string | null>('user');

  const [data, setData] = useState<AuthState>({} as AuthState);

  // useEffect(() => {
  //   if (storedUSer) {
  //     setData({ user: storedUSer });
  //   }
  // }, [storedUSer]);

  const signIn = useCallback(name => {
    // setStoredUser(name);
    setData({ user: name });
  }, []);

  const signOut = useCallback(() => {
    // setStoredUser(null);
    setData({});
  }, []);

  const user = data?.user;

  const value = React.useMemo(() => ({ user, signIn, signOut }), [
    signIn,
    signOut,
    user,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }

  return context;
};

export { AuthProvider, useAuth };
