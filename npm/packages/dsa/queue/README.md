# `@codinasion/queue`

Typescript implementation of a queue data structure.

![NPM Version](https://img.shields.io/npm/v/%40codinasion%2Fqueue?color=33cd56&logo=npm) ![Downloads](https://img.shields.io/npm/dm/%40codinasion%2Fqueue?logo=docusign&label=Downloads&logoColor=white) ![LICENSE](https://img.shields.io/npm/l/%40codinasion%2Fqueue?logo=googledocs&logoColor=white&label=LICENSE)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Installation

```bash
# if you're using pnpm
pnpm add @codinasion/queue

# or, if you're using npm
npm install @codinasion/queue

# or, if you're using yarn
yarn add @codinasion/queue
```

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Usage

```javascript
import { Queue } from "@codinasion/queue";

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

queue.dequeue();

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());
```

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Sponsors & Backers

![Sponsors](https://raw.githubusercontent.com/codinasion/sponsors/sponsors/sponsors.svg)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

<br/>

<p align="center">
Made with 💖 by <a href="https://github.com/codinasion"><b>Codinasion</b></a>
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>
