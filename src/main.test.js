import { capitalize, reverseString, calculator, analyzeArray } from "./testPractice";

test("capitalize string", () => {
  expect(capitalize("myname")).toBe("Myname");
});

test("reverseString (1)", () => {
  expect(reverseString("myname")).toBe("emanym");
});

test("reverseString (2)", () => {
  expect(reverseString("yourname")).toBe("emanruoy");
});

test("calculator add", () => {
  expect(calculator.add(66, 33)).toBe(99);
});

test("calculator subtract", () => {
  expect(calculator.subtract(55, 21)).toBe(34);
});

test("calculator divide", () => {
  expect(calculator.divide(99, 20)).toBe(4.95);
});

test("calculator multiply", () => {
  expect(calculator.multiply(29, 577)).toBe(16733);
});

test("analyzeArray(1)", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
