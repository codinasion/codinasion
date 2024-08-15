import { factorial } from "../factorial/factorial";

export function combination(n: number, r: number): number {
  if (r > n) {
    return 0;
  }
  return factorial(n) / (factorial(r) * factorial(n - r));
}
