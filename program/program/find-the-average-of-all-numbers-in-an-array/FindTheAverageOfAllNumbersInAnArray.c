#include <stdio.h>

int main() {
    int n, i;
    float sum = 0.0, avg;

    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter the elements of the array:\n");

    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }

    avg = sum / n;

    printf("The average of the elements in the array is: %f", avg);
    
    return 0;
}
