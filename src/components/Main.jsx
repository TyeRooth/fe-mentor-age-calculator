import { useState } from "react";

import Form from "./Form";
import Results from "./Results";

const Main = () => {
  const [years, setYears] = useState(null);
  const [months, setMonths] = useState(null);
  const [days, setDays] = useState(null);

  return (
    <main className="main-container">
      <Form />
      <Results years={years} months={months} days={days} />
    </main>
  );
};

export default Main;
