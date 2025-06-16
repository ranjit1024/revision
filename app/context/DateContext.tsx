import { createContext, useContext, useState } from "react";

// Define the context type
type NumberContextType = {
  number: number;
  setNumber: (n: number) => void;
};

// Create the context
const NumberContext = createContext<NumberContextType | null>(null);

// Create the provider component
export const NumberProvider = ({ children }: { children: React.ReactNode }) => {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber((prev) => prev + 1);

  return (
    <NumberContext.Provider value={{ number, setNumber }}>
      {children}
    </NumberContext.Provider>
  );
};

// Custom hook to use the context
export const useNumber = () => {
  const context = useContext(NumberContext);
  if (!context) throw new Error("useNumber must be used inside NumberProvider");
  return context;
};
