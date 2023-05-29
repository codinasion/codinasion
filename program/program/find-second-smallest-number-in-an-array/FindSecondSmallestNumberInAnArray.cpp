/* C++ program to find second number number in array */
#include <iostream>
using namespace std;
int main()
{
    int size;
    cout<<"Enter the size of array: ";
    cin>>size;
    int array[size];                            // array declaration

    for(int i=0;i<size;i++)
        cin>>array[i];                          // input array values

    int smallest=2147483647;                    // maximum integer values
    int secondsmall=2147483647;

    for(int i=0;i<size;i++){                    // logic for smallest and second smallest value
        if(smallest>array[i]){
            secondsmall=smallest;
            smallest=array[i];
        }
        if(secondsmall>array[i]&& array[i]>smallest)
            secondsmall=array[i];
    }

    cout<<"The second smallest number present in given array is "<<secondsmall;
    return 0;
}
