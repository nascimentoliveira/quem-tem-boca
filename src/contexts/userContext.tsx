'use client';
import LoadingBackDrop from '@/components/LoadingBackdrop';
import { ReactNode, createContext, useEffect, useState } from 'react';

interface UserData {
  id: number;
  email: string;
  username: string;
}

interface ContextData extends UserData {
  accessToken: string;
}

type UserContextType = {
  user: UserData | null;
  accessToken: string | null;
  signIn: (data: ContextData) => void;
  signOut: () => void;
};

const initialContext: UserContextType = {
  user: null,
  accessToken: null,
  signIn: () => {},
  signOut: () => {},
};

export const UserContext = createContext<UserContextType>(initialContext);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userDataLoaded, setUserDataLoaded] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const signIn = (data: ContextData) => {
    const { id, email, username, accessToken } = data;
    setAccessToken(accessToken);
    setUser({ id, email, username });
  };

  const signOut = () => {
    localStorage.removeItem('Quem-tem-boca');
    setUser(null);
    setAccessToken(null);
  };

  useEffect(() => {
    const localStoreData: string | null = localStorage.getItem('Quem-tem-boca');

    if (localStoreData) {
      const { id, email, username, accessToken } = JSON.parse(localStoreData);
      setAccessToken(accessToken);
      setUser({ id, email, username });
    }
    setUserDataLoaded(true);
  }, [accessToken]);

  return (
    <UserContext.Provider value={{ user, accessToken, signIn, signOut }}>
      {userDataLoaded ? children : <LoadingBackDrop />}
    </UserContext.Provider>
  );
}
