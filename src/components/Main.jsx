import { useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import Results from "./Results";
import validateBirthdateForm from "../utils/validations";
import calculateDateDiffs from "../utils/calculations";

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

  const resetErrors = () => {
    setDaysError(null);
    setMonthsError(null);
    setYearsError(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    resetErrors();
    const { dayError, monthError, yearError, dateError } =
      validateBirthdateForm(e.target);
    if (dayError || monthError || yearError) {
      setDaysError(dayError);
      setMonthsError(monthError);
      setYearsError(yearError);
      return;
    } else if (dateError) {
      setDaysError(dateError);
      return;
    }
    const { yearsCalc, monthsCalc, daysCalc } = calculateDateDiffs(e.target);
    setDays(daysCalc);
    setMonths(monthsCalc);
    setYears(yearsCalc);
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
