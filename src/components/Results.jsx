import PropTypes from "prop-types";
import styled from "styled-components";

import Result from "./Result";

const ResultsSection = styled.section`
  margin-top: 40px;
`

const Results = ({ years, months, days }) => {
  return (
    <ResultsSection>
      <Result label="years" calculation={years} />
      <Result label="months" calculation={months} />
      <Result label="days" calculation={days} />
    </ResultsSection>
  );
};

Results.propTypes = {
  years: PropTypes.string,
  months: PropTypes.string,
  days: PropTypes.string,
};

export default Results;
