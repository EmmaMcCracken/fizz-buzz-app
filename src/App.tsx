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
  // let displayFizzBuzz: (number | string)[];
  // if (fizzBuzzArray.length !== 1) {
  //   displayFizzBuzz = [
  //     fizzBuzzArray.slice(0, fizzBuzzArray.length - 1).join(", "),
  //     " and ",
  //     fizzBuzzArray[fizzBuzzArray.length - 1],
  //     ".",
  //   ];
  // } else {
  //   displayFizzBuzz = fizzBuzzArray;
  // }

  const fizzBuzzWithAnd = [
    fizzBuzzArray.slice(0, fizzBuzzArray.length - 1).join(", "),
    " and ",
    fizzBuzzArray[fizzBuzzArray.length - 1],
    ".",
  ];

  return (
    <>
      {/* <p>{fizzBuzzArray.length !== 1 && fizzBuzzWithAnd}</p>
      <p>{fizzBuzzArray.length === 1 && fizzBuzzArray}</p> */}
      {fizzBuzzArray.length !== 1 ? (
        <p>{fizzBuzzWithAnd}</p>
      ) : (
        <p>{fizzBuzzArray}</p>
      )}
      <button onClick={addNextElement}>Next</button>
    </>
  );
}

export default App;
