#include <stdio.h>

int main() {
  float hours,sec; 
  //taking input as hours
  printf("How many hours?:");
  scanf("%f",&hours);
  //converting 
  sec=hours*3600;
  //Output
  printf("%.2f",sec);

    return 0;
}
