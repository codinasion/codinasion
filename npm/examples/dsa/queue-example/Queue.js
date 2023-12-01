import { Queue } from "@codinasion/queue";

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

queue.dequeue();

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());
