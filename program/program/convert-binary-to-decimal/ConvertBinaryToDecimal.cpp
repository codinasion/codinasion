#include <iostream>

using namespace std;

int main()
{
    string binaryValue;
    cin>>binaryValue;
    int multiplyBy=1;
    int decimalValue=0;
    for(int i=binaryValue.size()-1;i>=0;i--){
        int bit = binaryValue[i] - '0';
        decimalValue += bit*multiplyBy;
        multiplyBy*=2;
    }
    cout<<decimalValue<<endl;

    return 0;
}
