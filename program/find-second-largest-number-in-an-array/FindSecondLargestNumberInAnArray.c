#include<stdio.h>
#include<limits.h>
int secondLargest(int *arr,int size) {
	if(size<2) return -1;
	int largest = INT_MIN,secondLargest = INT_MIN;
	for(int i=0;i<size;i++) {
		if(arr[i]>largest){
			secondLargest = largest;
			largest = arr[i];
		}
		else if(arr[i]>secondLargest)
			secondLargest = arr[i];
	}
return secondLargest;	
}
void main(){
	int n;
	printf("Enter number of element in the array: ");
	scanf("%d",&n);
	int arr[n];
	printf("Enter %d array elements: ");
	for(int i=0;i<n;i++)
		scanf("%d",&arr[i]);
	int secondLargestValue = secondLargest(arr,n);
	if(secondLargestValue!=-1)
		printf("Second largest value in the array: %d\n",secondLargest(arr,n));
	else 
		printf("Cannot find second largest number\n");
	
}
