// This programme returns the length of the Inputted string.

#include <bits/stdc++.h>
using namespace std;

// Function that calculates the length of the string.
int lengthOfString(string s){

    int i=0;
    // Every string ends with a null character ('\0')
    while(s[i] != '\0'){ 
        i++;
    }
    return i;

}

//Driver code.
int main(){

    string s;
    cout<<"Enter the string ";
    cin>>s;
    int length = lengthOfString(s); // or use the predefined function length() syntax: <string_name>.length() --> returns length of the string.
    cout<<"The length of the inputted string is "<<length<<endl;

    return 0;
}

/*
Contributed by : Kartikeya Saini
*/