import { Stack } from "./stack";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test("push adds elements to the stack", () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
  });

  test("pop removes and returns the last element", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.size()).toBe(1);
  });

  test("peek returns the last element without removing it", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.size()).toBe(2);
  });

  test("isEmpty returns true for an empty stack and false otherwise", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test("size returns the number of elements in the stack", () => {
    expect(stack.size()).toBe(0);
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });
});
