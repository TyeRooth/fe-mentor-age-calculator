import PropTypes from "prop-types";

import Result from "./Result";

const Results = ({ years, months, days }) => {
  return (
    <section className="results-section">
      <Result label="years" calculation={years} />
      <Result label="months" calculation={months} />
      <Result label="days" calculation={days} />
    </section>
  );
};

Results.propTypes = {
  years: PropTypes.number,
  months: PropTypes.number,
  days: PropTypes.number,
};

export default Results;
