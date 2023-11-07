"use strict";
const floydsTriangle = (n: number): void => {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + count + " ";
      count++;
    }
    console.log(str.trim());
  }
};

floydsTriangle(5);
