// import { greet } from "./utils/greet";
import { useState } from "react";
import { getFizzBuzzElement } from "./utils/getFizzBuzzElement";

function App(): JSX.Element {
  const [fizzBuzzArray, setFizzBuzzArray] = useState<(number | string)[]>([1]);

  function addNextElement() {
    setFizzBuzzArray([
      ...fizzBuzzArray,
      getFizzBuzzElement(fizzBuzzArray.length + 1),
    ]);
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
