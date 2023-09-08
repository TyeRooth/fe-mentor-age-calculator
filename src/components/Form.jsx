import FormItem from "./FormItem";
import arrowIcon from "../assets/images/icon-arrow.svg"

const Form = () => {
  return (
    <form className="birthdate-form">
      <FormItem name="birthdate-day" label="DAY" placeholder="DD" />
      <FormItem name="birthdate-month" label="MONTH" placeholder="MM" />
      <FormItem name="birthdate-year" label="YEAR" placeholder="YY" />
      <button className="birthdate-form-btn" type="submit">
        <img src={arrowIcon} alt="Submit birthdate"/>
      </button>
    </form>
  );
};

export default Form;
