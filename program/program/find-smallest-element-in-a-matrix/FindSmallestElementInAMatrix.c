#include<stdio.h>
int main()
{
 int i,j,m,n;
 float a[10][10], sm;
 printf("Enter row and column size:\n");
 scanf("%d%d", &m, &n);
 printf("Enter matrix elements:\n");
 for(i=0;i< m;i++)
 {
  for(j=0;j< n;j++)
  {
   printf("a[%d][%d]=",i,j);
   scanf("%f", &a[i][j]);
  }
 }
 sm = a[0][0];
 for(i=0;i< m;i++)
 {
  for(j=0;j< n;j++)
  {
   if(a[i][j]< sm)
   {
    sm = a[i][j];
   }
  }
 }
 printf("Smallest element = %f\n", sm);

}
