import { React, useContext } from "react";
import { LevelContext } from "./Section";

export function Heading({ children }) {
  const level = useContext(LevelContext);
  const H = `h${level}`;
  return (
    <H>
      {H}&nbsp;
      {children}
    </H>
  );
}
