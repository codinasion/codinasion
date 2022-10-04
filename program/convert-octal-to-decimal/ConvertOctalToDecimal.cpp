/**
 * Write a C++ program to convert octal to decimal
 * Input: 12
 * Output: 10
 */

#include <iostream>
#include <cmath>
using namespace std;

class Num{
    int octal;
    int decimal;
    public:
        Num(int o){
            octal = o;
            decimal = 0;
        }
        void convertToDecimal(){
            int num = octal;
            int i   = 0;
            while (num != 0)
            {
                int rem = num % 10;
                num /= 10;
                decimal += rem * pow(8, i);
                ++i;
            }
        }
        void showDecimal(){
            cout << "Decimal: " << decimal << endl;
        }
};

int main(){
    int n;
    cout << "Enter octal number: ";
    cin >> n;
    Num nmbr = Num(n);
    nmbr.convertToDecimal();
    nmbr.showDecimal();
    return 0;
}