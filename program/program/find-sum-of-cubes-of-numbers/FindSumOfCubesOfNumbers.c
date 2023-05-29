#include <stdio.h>

int main() {
    int size;
    scanf("%d", &size);
    int arr[size];
    for (int i = 0; i < size; i++) {
        scanf("%d", &arr[i]);
    }
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i] * arr[i] * arr[i];
    }
    printf("%d\n", sum);
    return 0;
}