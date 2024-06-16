/**
 * Represents a stack data structure.
 * @template T The type of elements stored in the stack.
 */
export class Stack<T> {
  private items: T[];

  /**
   * Creates a new instance of the Stack class.
   */
  constructor() {
    this.items = [];
  }

  /**
   * Adds an element to the top of the stack.
   * @param item The element to be added.
   */
  push(item: T): void {
    this.items.push(item);
  }

  /**
   * Removes and returns the element at the top of the stack.
   * @returns The element at the top of the stack, or undefined if the stack is empty.
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Returns the element at the top of the stack without removing it.
   * @returns The element at the top of the stack, or undefined if the stack is empty.
   */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * Checks if the stack is empty.
   * @returns True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the number of elements in the stack.
   * @returns The number of elements in the stack.
   */
  size(): number {
    return this.items.length;
  }
}
