#include <stdio.h>
#include <string.h>

void main() {
  
  char num[10000];
  
  printf("Enter a number: ");
  scanf("%s",num); 
  
  int digit_count = strlen(num);
  double sum=0;
  
  for(int i = 0; i < digit_count; i++){
            sum += num[i] - '0';
  }
  
  double average = (double)sum/digit_count;
  printf("Average of digits: %lf\n",average);

}
 