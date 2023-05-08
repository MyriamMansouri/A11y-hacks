import React, { useContext, createContext } from "react";

export const LevelContext = createContext(0);

export function Section({ children, classname }) {
  const level = useContext(LevelContext);
  return (
    <section classname={classname}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
