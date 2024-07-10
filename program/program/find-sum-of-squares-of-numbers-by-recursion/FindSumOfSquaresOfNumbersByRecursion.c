#include <stdio.h>

long long int recursiveSqSum(int *arr, int index){
    if(index<0) return 0;
    long long int val = recursiveSqSum(arr, index-1);
    return val + (arr[index]*arr[index]);
}

int main() {
    int input[] = {1,2,3,4,5};
    long long int size = sizeof(input)/sizeof(input[0]);
    printf("%lld",recursiveSqSum(input, size-1));
    return 0;
}