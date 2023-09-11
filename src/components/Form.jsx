import FormItem from "./FormItem";
import arrowIcon from "../assets/images/icon-arrow.svg";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid;
  border-color: hsl(0, 0%, 86%);
  padding-bottom: 25px;
  color: hsl(0, 1%, 44%);
  position: relative;
  font-family: poppinsBold;
`

const SubmitBtn = styled.button`
  background-color: hsl(259, 100%, 65%);
  border: none;
  border-radius: 50%;
  padding: 15px;
  position: absolute;
  bottom: -30px;
  right: 0px;
`

const SubmitIcon = styled.img`
  width: 30px;
  height: 30px;
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
