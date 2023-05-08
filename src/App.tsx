import React from "react";
import styled from "styled-components";
import { Section } from "./container/A11yHTMLElement/Section.tsx";
import { Heading } from "./container/A11yHTMLElement/Heading.tsx";
import { useIsDarkMode } from "./hooks/useIsDarkMode.ts";

export default function App() {
  const isDarkMode = useIsDarkMode();

  return (
    <Section classname="App">
      <Heading className={isDarkMode && "is-dark-mode"}>I'm a title</Heading>
      <Heading>I'm also a title</Heading>
      <Section classname="nested-section">
        <Heading>I'm a title but nested</Heading>
        <Section classname="nth-2-nested-section">
          <Heading>Let's dig deeper</Heading>
          <p>Lorem ipsum</p>
        </Section>
      </Section>
    </Section>
  );
}
