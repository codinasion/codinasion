#include <stdio.h>    
     
int main()    
{    
    //Initialize array     
    int arr[] = {1, 2, 3, 4, 5};      
        
    //Calculate length of array arr    
    int length = sizeof(arr)/sizeof(arr[0]);    
        
    //Initialize min with first element of array.    
    int min = arr[0];    
        
    //Loop through the array    
    for (int i = 0; i < length; i++) {     
        //Compare elements of array with min    
       if(arr[i] < min)    
           min = arr[i];    
    }      
    printf("Smallest element present in given array: %d\n", min);    
    return 0;    
}   
