import Main from "./components/Main";
import Footer from "./components/Footer";

import styled from "styled-components";

import "./App.css";

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: max-content;
  background-color: hsl(0, 0%, 94%);
`

const App = () => {
  return (
    <SectionWrapper>
      <Main />
      <Footer />
    </SectionWrapper>
  );
};

export default App;
