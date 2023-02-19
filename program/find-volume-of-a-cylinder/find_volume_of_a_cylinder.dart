import 'dart:math';

double findVolumeOfCylinder(double radius, height) =>
    pi * pow(radius, 2) * height;

void main() {
  print(findVolumeOfCylinder(2, 3)); // will return 37.69911184307752
  print(findVolumeOfCylinder(2.5, 3.746)); // will return 73.55253800217103
}
