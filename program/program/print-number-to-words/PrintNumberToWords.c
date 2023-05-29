#include<stdlib.h>
#include<stdio.h>
int main() {
 long num, div, n1;
 int flag, digit, pos, tot_dig;
 
 printf("\nEnter a number: ");
 scanf("%ld", &num);
 
 if(num == 0) {
 printf("Zeron\n");
 exit(0);
 }
 
 if(num > 99999) {
 printf("please enter a number between 0 and 100000\n\n");
 exit(0);
 }
 
 tot_dig = 0;
 div = 1;
 n1 = num;
 
 while ( n1 > 9 ) {
 n1 = n1 / 10;
 div = div * 10;
 
 tot_dig++;
 }
 
 
 tot_dig++;
 pos = tot_dig;
 
 while ( num != 0 ) {
 digit = num / div;
 num = num % div;
 div = div / 10;
 switch(pos) {
 case 2:
 case 5: 
 if ( digit == 1 )
 flag = 1;
 else {
 flag = 0;
 switch(digit) {
 case 2: printf("twenty ");break;
 case 3: printf("thirty ");break;
 case 4: printf("forty ");break;
 case 5: printf("fifty ");break;
 case 6: printf("sixty ");break;
 case 7: printf("seventy ");break;
 case 8: printf("eighty ");break;
 case 9: printf("ninty ");
 }
 }
 break;
 case 1:
 case 4:
 if (flag == 1) {
 flag = 0;
 switch(digit) {
 case 0 : printf("ten ");break;
 case 1 : printf("eleven ");break;
 case 2 : printf("twelve ");break;
 case 3 : printf("thirteen ");break;
 case 4 : printf("fourteen ");break;
 case 5 : printf("fifteen ");break;
 case 6 : printf("sixteen ");break;
 case 7 : printf("seventeen ");break;
 case 8 : printf("eighteen ");break;
 case 9 : printf("nineteen ");
 }
 } else {
 switch(digit) {
 case 1 : printf("one ");break;
 case 2 : printf("two ");break;
 case 3 : printf("three ");break;
 case 4 : printf("four ");break;
 case 5 : printf("five ");break;
 case 6 : printf("six ");break;
 case 7 : printf("seven ");break;
 case 8 : printf("eight ");break;
 case 9 : printf("nine ");
 }
 }
 
 if (pos == 4) 
 printf("thousand ");
 break;
 
 case 3:
 if (digit > 0) {
 switch(digit) {
 case 1 : printf("one ");break;
 case 2 : printf("two ");break;
 case 3 : printf("three ");break;
 case 4 : printf("four ");break;
 case 5 : printf("five ");break;
 case 6 : printf("six ");break;
 case 7 : printf("seven ");break;
 case 8 : printf("eight ");break;
 case 9 : printf("nine ");
 }
 printf("hundred ");
 }
 break;
 }
 pos--;
 }
 if (pos == 4 && flag == 0)
 printf("thousand");
 else if (pos == 4 && flag == 1)
 printf("ten thousand");
 
 if (pos == 1 && flag == 1)
 printf("ten ");
  return 0;
}
