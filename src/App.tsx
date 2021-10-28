// import { greet } from "./utils/greet";
import { useState } from "react";

function App(): JSX.Element {
  const [fizzBuzzArray, setFizzBuzzArray] = useState<(number | string)[]>([1]);

  function addNextElement() {
    let nextElement: number | string;
    if ((fizzBuzzArray.length + 1) % 15 === 0) {
      nextElement = "FizzBuzz";
    } else if ((fizzBuzzArray.length + 1) % 3 === 0) {
      nextElement = "Fizz";
    } else if ((fizzBuzzArray.length + 1) % 5 === 0) {
      nextElement = "Buzz";
    } else {
      nextElement = fizzBuzzArray.length + 1;
    }

    setFizzBuzzArray([...fizzBuzzArray, nextElement]);
  }
  let displayFizzBuzz: (number | string)[];
  if (fizzBuzzArray.length !== 1) {
    displayFizzBuzz = [
      fizzBuzzArray.slice(0, fizzBuzzArray.length - 1).join(", "),
      " and ",
      fizzBuzzArray[fizzBuzzArray.length - 1],
      ".",
    ];
  } else {
    displayFizzBuzz = fizzBuzzArray;
  }

  return (
    <>
      <p>{displayFizzBuzz}</p>
      <button onClick={addNextElement}>Next</button>
    </>
  );
}

export default App;
