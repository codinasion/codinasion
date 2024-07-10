#include<stdio.h>
void FindLargestTwoElements(int arr[],int size){

    int firstMax, secondMax;

    if (size < 2) {
        printf("Array size should be at least 2 to find two largest elements.\n");
        return;
    }

    if (arr[0] > arr[1]) {
        firstMax = arr[0];
        secondMax = arr[1];
    } else {
        firstMax = arr[1];
        secondMax = arr[0];
    }

    for(int i=0;i<size;i++){
        if(arr[i]>firstMax){
            secondMax = firstMax;
            firstMax = arr[i];
        }
        else if(arr[i]>secondMax && arr[i]!=firstMax){
            secondMax = arr[i];
        }
    }
    printf("The largest two elements are %d and %d\n", firstMax, secondMax);
}

int main()
{
    int arr1[] = {12, 13, 1, 10, 34, 1};
     int size1 = sizeof(arr1)/sizeof(arr1[0]);
    FindLargestTwoElements(arr1,size1);

    int arr2[] = {10, 5, 10};
     int size2 = sizeof(arr2)/sizeof(arr2[0]);
    FindLargestTwoElements(arr2,size2);

    int arr3[] = {10, 10, 10};
     int size3 = sizeof(arr3)/sizeof(arr3[0]);
    FindLargestTwoElements(arr3,size3);
 
    return 0;
}
