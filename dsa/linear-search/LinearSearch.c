
// Program for linear search in c language

#include<stdio.h>


// linearSearch function returns the index of key
// if key is not found in the array it returns -1;
int linearSearch(int arr[] , int key , int n)
{

    for(int i=0;i< n ; i++)
    {
        if(arr[i] == key)
            return i;
    }
    return -1;
}


int main()
{
    // array in which key is searched 
    // n is the number of elements in array
    // key is target key

    int n , key , index;
    
    // Enter the number of elements in array
    printf("Enter the number of elements");
    scanf("%d" , &n);
    printf("Enter the elements");
    int array[n];
    for(int i=0;i<n;i++)
    {
        scanf("%d", &array[i]);
    }

    printf("Enter the target key ");
    scanf("%d" , &key);
    
    
    index = linearSearch(array , key, n );
    printf("%d", index);

    return 0;


}
