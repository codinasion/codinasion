#include <stdio.h>

void swap(int *x, int *y){
    int temp = *x;
    *x = *y;
    *y= temp;
}
int main(){

   int n=3;
   int mat[3][3]= { { 1, 2, 3 },{ 4, 5, 6},{ 7, 8, 9 } };

   for(int i=0; i<n; i++){
     for(int j=i+1; j<n; j++)
         swap(&mat[i][j], &mat[j][i]);
    }

   for(int i=0; i<n; i++){
     for(int j=0; j<n/2; j++){
        swap(&mat[i][j], &mat[i][n-j-1]);
     }
   }

   printf("Rotated Matrix :\n");
   for(int i=0; i<n; i++){
     for(int j=0; j<n; j++){
       printf("%d ",mat[i][j]);
     }
     printf("\n");
   }
}
