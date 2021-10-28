export function getFizzBuzzElement(num: number): number | string {
  let fizzBuzzElement: number | string;
  if (num % 15 === 0) {
    fizzBuzzElement = "FizzBuzz";
  } else if (num % 3 === 0) {
    fizzBuzzElement = "Fizz";
  } else if (num % 5 === 0) {
    fizzBuzzElement = "Buzz";
  } else {
    fizzBuzzElement = num;
  }
  return fizzBuzzElement;
}
