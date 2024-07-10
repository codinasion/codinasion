#include<iostream>
using namespace std;
int main(){
    int numEl, i, size = 10;
    float num[size], result = 0.0, avg;

    cout << "Enter the numbers of elements :";
    cin >> numEl;
    while (numEl > size || numEl < 1)
    {
        cout << "Enter a valid range (1 - 10).\n" ;
        cout <<"Enter the number of element again :";
        cin >> numEl
    }
    for (i = 0; i < numEl; ++i)
    {
        cin >> num[i];
        result += num[i];
    }
    avg = result / numEl;
   cout << "Average :%.2f" << avg;
    return 0;
}