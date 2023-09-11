import FormItem from "./FormItem";
import arrowIcon from "../assets/images/icon-arrow.svg";
import styled from "styled-components";

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
`

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
`

const SubmitIcon = styled.img`
  width: 30px;
  height: 30px;
  @media screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`

const Form = () => {
  return (
    <StyledForm>
      <FormItem id="birthdate-day" label="DAY" placeholder="DD" />
      <FormItem id="birthdate-month" label="MONTH" placeholder="MM" />
      <FormItem id="birthdate-year" label="YEAR" placeholder="YY" />
      <SubmitBtn className="birthdate-form-btn" type="submit">
        <SubmitIcon src={arrowIcon} alt="Submit birthdate"/>
      </SubmitBtn>
    </StyledForm>
  );
};

export default Form;
