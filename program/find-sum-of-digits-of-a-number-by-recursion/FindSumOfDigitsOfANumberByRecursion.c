#include <stdio.h>

int FindSumOfDigitsOfANumberByRecursion(int n){
    if(n>0){
        return n%10+FindSumOfDigitsOfANumberByRecursion(n/10);
    }
}

int main(){
    int n;
    scanf("%d",&n);
    int res=FindSumOfDigitsOfANumberByRecursion(n);
    printf("%d",res);
    return 0;
}

//Contributed by Raghav Garg