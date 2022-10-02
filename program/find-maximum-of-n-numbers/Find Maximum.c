#include<stdio.h>

int main (){
    int n;
    printf("Enter size of array:");
    scanf("%d",&n);
    int a[10];
    printf("Enter array elements:\n");
    for(int i=0;i<n;i++){
    scanf("%d",&a[i]);
    }
    int largest=a[0];
    for(int i=1;i<n;i++){
        if(a[i]>largest){
            largest=a[i];
        }
    }
    printf("Largest is %d",largest);
    return 0;
}