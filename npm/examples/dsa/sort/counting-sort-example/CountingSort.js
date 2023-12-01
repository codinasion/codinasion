import { CountingSort } from "@codinasion/counting-sort";

const arr = [1, 4, 7, 2, 5, 8, 3, 6, 9];

const sortedArr = CountingSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
