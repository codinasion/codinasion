import 'dart:io';
import 'dart:math';

void main() {
  // take input for the coefficients of x^2, x, and constant c
  print('Enter the coefficients of x^2, x, and constant c separated by spaces:');
  List<String> input = stdin.readLineSync()!.split(' ');

  // parse the input to doubles
  double coefficientOfXSquare = double.parse(input[0]);
  double coefficientOfX = double.parse(input[1]);
  double constantTerm = double.parse(input[2]);

  // calculate the discriminant
  double discriminant = pow(coefficientOfX, 2) - 4 * coefficientOfXSquare * constantTerm;

  // check if the discriminant is positive, negative, or zero
  if (discriminant > 0) {
    // two real and distinct roots
    double root1 = (-coefficientOfX + sqrt(discriminant)) / (2 * coefficientOfXSquare);
    double root2 = (-coefficientOfX - sqrt(discriminant)) / (2 * coefficientOfXSquare);
    print('The roots are: $root1 and $root2');
  } else if (discriminant == 0) {
    // one real and repeated root
    double root = -coefficientOfX / (2 * coefficientOfXSquare);
    print('The roots are: $root and $root');
  } else {
    // two complex roots
    double realPart = -coefficientOfX / (2 * coefficientOfXSquare);
    double imaginaryPart = sqrt(-discriminant) / (2 * coefficientOfXSquare);
    print('The roots are: $realPart + ${imaginaryPart}i and $realPart - ${imaginaryPart}i');
  }
}
