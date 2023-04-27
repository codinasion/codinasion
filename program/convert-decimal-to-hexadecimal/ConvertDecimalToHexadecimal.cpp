#include <iostream>
#include <string>
using namespace std;
// This gives value of char in decimal
int NumberCharToValue(char ch, int base)
{
    if (ch >= '0' && ch <= '9')
    {
        return (int)(ch - '0');
    }
    // next will be A,B,C....
    return ((int)(ch - 'A') + 10);
}
// This gives char of value in decimal
char NumberValueToChar(int num, int base)
{
    if (num <= 9)
    {
        return (char)('0' + num);
    }
    // num will be 10,11,12 ...
    return (char)(num - 10 + 'A');
}
// idea is to convert input to decimal then from decimal to output
void convertNumberSystem(char *input, char *output, int fromBase, int toBase)
{
    // convert input to decimal
    int inputLength = strlen(input);
    long long decimal = 0, digitPower = 1;

    for (int i = inputLength - 1; i >= 0; i--)
    {
        decimal += NumberCharToValue(input[i], fromBase) * digitPower;
        digitPower *= fromBase;
    }

    // convert decimal to reversed output
    int outputIndex = 0;
    while (decimal != 0)
    {
        output[outputIndex++] = NumberValueToChar(decimal % toBase, toBase);
        decimal /= toBase;
    }
    // reverse the output to get actual output
    for (int i = 0; i < outputIndex / 2; i++)
    {
        int temp = output[i];
        output[i] = output[outputIndex - i - 1];
        output[outputIndex - i - 1] = temp;
    }
}

int main()
{

    char input[10000], output[10000];

    cin >> input;

    convertNumberSystem(input, output, 10, 16); // This function can convert from a number from any base to another base

    cout << output << "\n";

    return 0;
}