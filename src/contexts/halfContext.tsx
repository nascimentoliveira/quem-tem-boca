import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';

type HalfContextType = {
  showFirstHalf: boolean;
  setShowFirstHalf: Dispatch<SetStateAction<boolean>>;
};

const initialContext: HalfContextType = {
  showFirstHalf: true,
  setShowFirstHalf: () => {},
};

export const HalfContext = createContext<HalfContextType>(initialContext);

export function HalfProvider({ children }: { children: ReactNode }) {
  const [showFirstHalf, setShowFirstHalf] = useState<boolean>(true);

  return (
    <HalfContext.Provider value={{ showFirstHalf, setShowFirstHalf }}>
      {children}
    </HalfContext.Provider>
  );
}

export function useHalf() {
  return useContext(HalfContext);
}
