import PropTypes from "prop-types";

const Result = ({ label, calculation }) => {
  return (
    <article className="calculation-result">
      <span className="calculation span">
        {!calculation ? "--" : calculation}
      </span>
      {" "}{label}
    </article>
  );
};

Result.propTypes = {
  label: PropTypes.string.isRequired,
  calculation: PropTypes.number,
};

export default Result;
