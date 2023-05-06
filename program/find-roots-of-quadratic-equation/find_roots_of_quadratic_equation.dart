import 'dart:io';
import 'dart:math';

void main() {
  // take input for the coefficients of x^2, x, and constant c
  print('Enter the coefficients of x^2, x, and constant c separated by spaces:');
  List<String> input = stdin.readLineSync()!.split(' ');

  // parse the input to doubles
  double a = double.parse(input[0]);
  double b = double.parse(input[1]);
  double c = double.parse(input[2]);

  // calculate the discriminant
  double discriminant = pow(b, 2) - 4 * a * c;

  // check if the discriminant is positive, negative, or zero
  if (discriminant > 0) {
    // two real and distinct roots
    double root1 = (-b + sqrt(discriminant)) / (2 * a);
    double root2 = (-b - sqrt(discriminant)) / (2 * a);
    print('The roots are: $root1 and $root2');
  } else if (discriminant == 0) {
    // one real and repeated root
    double root = -b / (2 * a);
    print('The roots are: $root and $root');
  } else {
    // two complex roots
    double realPart = -b / (2 * a);
    double imaginaryPart = sqrt(-discriminant) / (2 * a);
    print('The roots are: $realPart + ${imaginaryPart}i and $realPart - ${imaginaryPart}i');
  }
}
