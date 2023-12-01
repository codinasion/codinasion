/**
 * Represents a queue data structure.
 * @template T The type of elements stored in the queue.
 */
export class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  /**
   * Adds an element to the end of the queue.
   * @param item The element to be added.
   */
  enqueue(item: T): void {
    this.items.push(item);
  }

  /**
   * Removes and returns the element at the front of the queue.
   * @returns The element at the front of the queue, or undefined if the queue is empty.
   */
  dequeue(): T | undefined {
    return this.items.shift();
  }

  /**
   * Returns the element at the front of the queue without removing it.
   * @returns The element at the front of the queue, or undefined if the queue is empty.
   */
  peek(): T | undefined {
    return this.items[0];
  }

  /**
   * Checks if the queue is empty.
   * @returns True if the queue is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the number of elements in the queue.
   * @returns The number of elements in the queue.
   */
  size(): number {
    return this.items.length;
  }
}
