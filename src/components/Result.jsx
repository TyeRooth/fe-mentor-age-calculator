import PropTypes from "prop-types";
import styled from "styled-components";

const ResultArticle = styled.article`
  font-family: poppinsExtraBoldItalic;
  font-size: 66px;
  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
`;

const CalculatedResult = styled.span`
  color: hsl(259, 100%, 65%);
`;

const Result = ({ label, calculation }) => {
  return (
    <ResultArticle className="calculation-result">
      <CalculatedResult>{!calculation ? "--" : calculation}</CalculatedResult>{" "}
      {label}
    </ResultArticle>
  );
};

Result.propTypes = {
  label: PropTypes.string.isRequired,
  calculation: PropTypes.number,
};

export default Result;
