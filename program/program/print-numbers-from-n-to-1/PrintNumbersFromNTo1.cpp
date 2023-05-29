// Write a C++ program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

#include <iostream>

using namespace std;

int main()
{
    int n;
    cin >> n;
    int i = n;
    
    while(i != 0){
      cout<< i << " ";
      i = i - 1;
    }
}

//Contributed by Technical Amanjeet