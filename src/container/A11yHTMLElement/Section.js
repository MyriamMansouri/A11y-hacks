import { React, useContext, createContext } from "react";

export const LevelContext = createContext(0);

export function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
