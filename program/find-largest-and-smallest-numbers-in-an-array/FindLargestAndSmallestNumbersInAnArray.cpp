#include<iostream>
using namespace std;
int main()
{
int * pointer ;
cout<< "Enter the size of array :";
int input,max,min;
cin>>input;
pointer =new int[input];
int temp;

for(int counter =0 ; counter <input ; counter ++){
    cout<< "enter the item  "<<counter+1 << endl;
    cin>>temp;
    *(pointer+counter) =temp;
}
max= pointer[0];
min = pointer[0];
for(int i=0 ; i< input ;i++){
 if(max < pointer[i]){
    max=pointer[i];
 }
 if(min > pointer[i]){
    min = pointer[i];
 }
}
cout<< max << ", "<<min;



 return 0;
}
