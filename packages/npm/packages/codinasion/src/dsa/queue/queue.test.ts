import { Queue } from "./queue";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test("enqueue adds elements to the queue", () => {
    queue.enqueue(1);
    expect(queue.size()).toBe(1);
  });

  test("dequeue removes and returns the first element", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size()).toBe(1);
  });

  test("peek returns the first element without removing it", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    expect(queue.size()).toBe(2);
  });

  test("isEmpty returns true for an empty queue and false otherwise", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test("size returns the number of elements in the queue", () => {
    expect(queue.size()).toBe(0);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
  });
});
