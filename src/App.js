import { React } from "react";
import { Section } from "./container/A11yHTMLElement/Section";
import { Heading } from "./container/A11yHTMLElement/Heading";
import { useIsDarkMode } from "./hooks/useIsDarkMode";
import "./styles.css";

export default function App() {
  const isDark = useIsDarkMode();

  return (
    <Section className="App">
      <Heading>I'm a title</Heading>
      <Heading>I'm also a title</Heading>
      <Section className="nested-section">
        <Heading>I'm a title but nested</Heading>
        <Section className="nth-2-nested-section">
          <Heading>Let's dig deeper</Heading>
        </Section>
      </Section>
    </Section>
  );
}
