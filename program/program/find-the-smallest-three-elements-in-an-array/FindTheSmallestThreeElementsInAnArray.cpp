#include <iostream>
#include <algorithm>
using namespace std;

void findSmallestThree(int arr[],int size){


sort(arr,arr + size);

for (int i = 0; i < min(size, 3); ++i) {
    cout << arr[i] << " ";
}
}

int main(){

int arr[]= { 10, 4, 3, 50, 23, 90};//example used
int size = sizeof(arr) / sizeof(arr[0]);
findSmallestThree(arr, size);

return 0;



}