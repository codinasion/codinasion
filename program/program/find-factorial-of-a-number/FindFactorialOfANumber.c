#include<stdio.h>

int main(){
    int number;
    scanf("%d",&number);
    int factorial=1;
    for(int i=number;i>=1;i--){
        factorial=factorial*i;
    }
    printf("Factorial of the given number is: %d",factorial);
    return 0;
}