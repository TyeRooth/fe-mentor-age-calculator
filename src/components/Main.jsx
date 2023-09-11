import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Results from "./Results";

const MainContent = styled.main`
  background-color: white;
  padding: 40px;
  border-radius: 14px;
  border-bottom-right-radius: 60px;
  display: flex;
  flex-direction: column;
  width: 60vw;
`

const Main = () => {
  const [years, setYears] = useState(null);
  const [months, setMonths] = useState(null);
  const [days, setDays] = useState(null);

  return (
    <MainContent>
      <Form />
      <Results years={years} months={months} days={days} />
    </MainContent>
  );
};

export default Main;
