import FormItem from "./FormItem";
import arrowIcon from "../assets/images/icon-arrow.svg";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledForm = styled.form`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid;
  border-color: hsl(0, 0%, 86%);
  padding-bottom: 35px;
  position: relative;
  font-family: poppinsBold;
  @media screen and (max-width: 600px) {
    padding-bottom: 50px;
  }
`;

const SubmitBtn = styled.button`
  background-color: hsl(259, 100%, 65%);
  border: none;
  border-radius: 50%;
  padding: 15px;
  position: absolute;
  bottom: -30px;
  right: 0px;
  &:hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 8%);
  }
  @media screen and (max-width: 600px) {
    left: 0%;
    margin: 0 auto;
    bottom: -25px;
  }
`;

const SubmitIcon = styled.img`
  width: 30px;
  height: 30px;
  @media screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;

const Form = ({ handleFormSubmit, daysError, monthsError, yearsError }) => {
  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <FormItem
        id="birthdate-day"
        label="DAY"
        placeholder="DD"
        error={daysError}
      />
      <FormItem
        id="birthdate-month"
        label="MONTH"
        placeholder="MM"
        error={monthsError}
      />
      <FormItem
        id="birthdate-year"
        label="YEAR"
        placeholder="YY"
        error={yearsError}
      />
      <SubmitBtn className="birthdate-form-btn" type="submit">
        <SubmitIcon src={arrowIcon} alt="Submit birthdate" />
      </SubmitBtn>
    </StyledForm>
  );
};

Form.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  daysError: PropTypes.string,
  monthsError: PropTypes.string,
  yearsError: PropTypes.string,
};

export default Form;
