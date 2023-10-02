import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

type UserProviderProps = {
  children: ReactNode;
};

type UserData = {
  id: number;
  email: string;
  username: string;
};

type UserContextType = {
  user: UserData | null;
  setUser: Dispatch<SetStateAction<UserData | null>>;
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
};

const initialContext: UserContextType = {
  user: null,
  setUser: () => {},
  accessToken: null,
  setAccessToken: () => {},
};

export const UserContext = createContext<UserContextType>(initialContext);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserData | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const localStoreData: string | null = localStorage.getItem('Quem-tem-boca');

    if (localStoreData) {
      const localData = JSON.parse(localStoreData);
      setAccessToken(localData.accessToken ?? null);

      delete localData.accessToken;

      setUser(localData ?? null);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, accessToken, setAccessToken }}>
      {children}
    </UserContext.Provider>
  );
}
