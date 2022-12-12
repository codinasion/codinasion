'use strict';

let N = 3;

function rotate90Clockwise(arr) {
  for (j = 0; j < N; j++) {
    for (i = N - 1; i >= 0; i--)
      console.log(arr[i][j] + " ");
  }
}


let arr = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
rotate90Clockwise(arr);
