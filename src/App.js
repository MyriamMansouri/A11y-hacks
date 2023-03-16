import "./styles.css";
import { Section } from "./container/Heading/Section";
import { Heading } from "./container/Heading/Heading";

export default function App() {
  return (
    <Section className="App">
      <Heading>Hello CodeSandbox</Heading>
      <Heading>Start editing to see some magic happen!</Heading>
      <Section className="nested-section">
        <Heading>Hello CodeSandbox</Heading>
      </Section>
    </Section>
  );
}
