#include<stdio.h>

int main()
{
 int Size, i, a[10];
 int Addition = 0;
 
 // You have specify the array size 
 printf("\n Please Enter the Size\n");
 scanf("%d", &Size);
 
 printf("\nPlease Enter the Elements\n");
 //Start at 0, it will save user enter values into array a 
 for(i = 0; i < Size; i++)
  {
      scanf("%d", &a[i]);
  }
 // Loop Over, and add every item to Addition 
 for(i = 0; i < Size; i ++)
 {
      Addition = Addition + a[i]; 
 }
  
 printf("Sum = %d ", Addition);
 return 0;
}