//Program to print the character of given ASCII value
#include<stdio.h>
int main ()
{
  int num[100], len;
  printf ("enter number of characters in your string:");
  scanf ("%d", &len);
  
  printf ("Enter ASCII values of your string :");
  for(int i=0;i<len;i++)
  {
  scanf ("%d", &num[i]);
  }
  
  
  printf("Your String:");
  for(int i=0;i<len;i++)
  {
  printf ("%c", num[i]);
  }
  return 0;
}
