import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Results from "./Results";
import validateBirthdateForm from "../utils/validations";

const MainContent = styled.main`
  background-color: white;
  padding: 40px;
  border-radius: 14px;
  border-bottom-right-radius: 30%;
  display: flex;
  flex-direction: column;
  width: 50vw;
`;

const Main = () => {
  const [days, setDays] = useState(null);
  const [months, setMonths] = useState(null);
  const [years, setYears] = useState(null);
  const [daysError, setDaysError] = useState(null);
  const [monthsError, setMonthsError] = useState(null);
  const [yearsError, setYearsError] = useState(null);

  const handleFormSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    const { dayError, monthError, yearError } = validateBirthdateForm(e.target);
    if (dayError || monthError || yearError) {
      setDaysError(dayError);
      setMonthsError(monthError);
      setYearsError(yearError);
    }
    // setDays(e.target[0].value);
    // setMonths(e.target[1].value);
    // setYears(e.target[2].value);
  };

  return (
    <MainContent>
      <Form
        handleFormSubmit={handleFormSubmit}
        daysError={daysError}
        monthsError={monthsError}
        yearsError={yearsError}
      />
      <Results years={years} months={months} days={days} />
    </MainContent>
  );
};

export default Main;
