import { helloWorld } from "../src";

test("Hello World", () => {
  console.log = jest.fn();
  helloWorld();
  expect(console.log).toHaveBeenCalledWith("Hello World");
});
