const validateBirthdateForm = (target) => {
  const dayError = validateBirthdateDay(target[0].value);
  const monthError = validateBirthdateMonth(target[1].value);
  const yearError = validateBirthdateYear(target[2].value);
  const dateError = validateBirthdateDate(
    target[0].value,
    target[1].value,
    target[2].value
  );
  return { dayError, monthError, yearError, dateError };
};

const validateBirthdateDay = (value) => {
  if (!value) {
    return "This field is required";
  } else if (value > 31 || isNaN(parseInt(value))) {
    return "Must be a valid day";
  }
};

const validateBirthdateMonth = (value) => {
  if (!value) {
    return "This field is required";
  } else if (value > 12 || isNaN(parseInt(value))) {
    return "Must be a valid month";
  }
};

const validateBirthdateYear = (value) => {
  if (!value) {
    return "This field is required";
  } else if (value > new Date().getFullYear()) {
    return "Must be in the past";
  } else if (isNaN(parseInt(value))) {
    return "Must be a valid year";
  }
};

const validateBirthdateDate = (day, month, year) => {
  const enteredDate = new Date(`${year}/${month}/${day}`);
  // getMonth lists months from 0 - 11 where user enters it as 1 - 12
  if (enteredDate.getMonth() === parseInt(month)) {
    return "Must be a valid date";
  } else if (enteredDate > new Date()) {
    return "Must be in the past";
  }
};

// const validateBirthdateDate = ()

export default validateBirthdateForm;
