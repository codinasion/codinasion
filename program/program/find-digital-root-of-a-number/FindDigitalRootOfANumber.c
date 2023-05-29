// C Program to find the Digital Root of a Number
#include<stdio.h>
int digital_root(int);
void main()
{
    int num;
    printf("Enter Your Number :\n");
    scanf("%d",&num);
    if(num!=0){
    int dr=digital_root(num);
    printf("Digital Root of %d is %d",num,dr);
    }
}
int digital_root(int n)
{
    int sum=0;
    while(1)
    {
      while(n!=0)
      {
         sum=sum+(n%10);
         n=n/10;
      }
      if(sum>9)
      {
        n=sum;
        sum=0;
      }
      else
        break;
    } 
    return sum;
}
