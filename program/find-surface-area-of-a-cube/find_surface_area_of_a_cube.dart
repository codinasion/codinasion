import 'dart:math';

void main() {
  print(findCubeSurfaceArea(2));
}

num findCubeSurfaceArea(int side) {
  return 6 * pow(side, 2);
}
