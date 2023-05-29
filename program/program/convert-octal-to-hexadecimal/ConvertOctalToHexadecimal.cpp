#include <iostream>
using namespace std;
 
string octalToHexadecimal(int n)
{
    int decimal = 0, base = 1;
    while (n > 0) {
        int rem = n % 10;
        decimal += rem * base;
        n /= 10;
        base *= 8;
    }
     
    string hexadecimal = "";
    while (decimal > 0) {
        int rem = decimal % 16;
        if (rem < 10) {
            hexadecimal = to_string(rem) + hexadecimal;
        } else {
            hexadecimal = (char)(rem - 10 + 'A') + hexadecimal;
        }
        decimal /= 16;
    }
    return hexadecimal;
}
 
int main()
{
    int octal = 12;
    string hexadecimal = octalToHexadecimal(octal);
    cout << "Equivalent Hexadecimal Value = " << hexadecimal << endl;
    return 0;
}
