#include <stdio.h>
#include <math.h>

double volumeOfCone(double radius, double height) {
  double volume = 1.0/3.0 * M_PI * pow(radius, 2) * height;
  return volume;
}

int main(void) {
  double coneRadius = 2;
  double coneHeight = 3;
  double coneVolume = volumeOfCone(coneRadius, coneHeight);

  printf("Volume of cone = %f\n", coneVolume);

  return 0;
}
