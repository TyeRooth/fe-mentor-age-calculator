import { DateTime } from "luxon";

const calculateDateDiffs = (target) => {
  const enteredDate = DateTime.fromObject({
    year: target[2].value,
    month: target[1].value,
    day: target[0].value,
  });
  const currentDate = DateTime.now();
  const duration = currentDate.diff(enteredDate, ["years", "months", "days"]);
  const yearsCalc = duration.years.toString();
  const monthsCalc = duration.months.toString();
  const daysCalc = Math.floor(duration.days).toString();
  return { yearsCalc, monthsCalc, daysCalc };
};

export default calculateDateDiffs;
