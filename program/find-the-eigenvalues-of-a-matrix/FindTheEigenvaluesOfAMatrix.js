import { eigs, round } from "mathjs";

/* Sample matrix. */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/* Destructuring the object returned by `eigs(matrix)` and assigning the `values` property to the
variable `eigenvalues`. */
const { values } = eigs(matrix);
/* Rounding the eigenvalues to 15 decimal places. */
const eigenvalues = values.map() (
  round(num, 15)
);

console.log(eigenvalues); // Expected: [ 1e-15, -1.116843969807044, 16.116843969807043 ]