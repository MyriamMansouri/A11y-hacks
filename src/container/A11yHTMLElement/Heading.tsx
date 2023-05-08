import React, { useContext } from "react";
import styled from "styled-components";
import { LevelContext } from "./Section.tsx";

const HeadingComponent = ({ children, className }) => {
  const level = useContext(LevelContext);
  const H = `h${level}`;
  return (
    <H className={className}>
      {H}&nbsp;
      {children}
    </H>
  );
};

export const Heading = styled(HeadingComponent)`
  &.is-dark-mode {
    color: white;
    background: black;
  }
`;
