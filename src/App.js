import "./styles.css";
import { Section } from "./container/Heading/Section";
import { Heading } from "./container/Heading/Heading";

export default function App() {
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
