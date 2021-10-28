import { getFizzBuzzElement } from "./getFizzBuzzElement";

test("Numbers which are not multiples of 3 or 5 remain unchanged", () => {
  expect(getFizzBuzzElement(1)).toBe(1);
  expect(getFizzBuzzElement(17)).toBe(17);
  expect(getFizzBuzzElement(59)).toBe(59);
});

test("Multiples of 3 are `Fizz`.", () => {
  expect(getFizzBuzzElement(3)).toBe("Fizz");
  expect(getFizzBuzzElement(81)).toBe("Fizz");
  expect(getFizzBuzzElement(6561)).toBe("Fizz");
});
