import 'dart:math';

void main() {
  
  int a1 = 2; // First term of the GP
  int r = 3; // Common ratio
  int n = 3; // Number of terms

  // Calculating the sum of the GP series
  double sum = calculateGPSum(a1, r, n);

  // Printing the output
  print("Sum of GP series: $sum");
}

double calculateGPSum(int a1, int r, int n) {
  // Using the formula for the sum of GP series
  return a1 * (pow(r, n) - 1) / (r - 1);
}
