#include <iostream>
//#include <cmath>

using namespace std;

int  convertBinarytoOctal(long long binaryNumber)
{
    int octalNumber = 0, decimalNumber = 0, i = 0;
	//Converting Binary to Decimal
    while(binaryNumber != 0) {
    	int remainder = binaryNumber%10;
    	if(remainder != 0 && remainder != 1) return -1;
        decimalNumber += remainder * (1<<i);
        binaryNumber/=10;
        i++;
    }

    i = 1;
	//Converting  Decimal to Octal
    while (decimalNumber != 0)
    {
        octalNumber += (decimalNumber % 8) * i;
        decimalNumber /= 8;
        i *= 10;
    }

    return octalNumber;
}

int main()
{
    long long binary=0;

    cout << "Enter a binary number: ";
    cin>>binary;
    
    int octal = convertBinarytoOctal(binary);
    if(octal!=-1)
    	cout<<"binary "<<binary<<" = "<<octal<<" in octal"<<endl;
	else 
		cout<<binary<<" is not a binary number!!"<<endl;
    return 0;
}


