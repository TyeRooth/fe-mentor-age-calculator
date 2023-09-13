const validateBirthdateForm = (target) => {
  const dayError = validateBirthdateDay(target[0].value);
  const monthError = validateBirthdateMonth(target[1].value);
  const yearError = validateBirthdateYear(target[2].value);
  return { dayError, monthError, yearError }
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

// const validateBirthdateDate = ()

export default validateBirthdateForm;
