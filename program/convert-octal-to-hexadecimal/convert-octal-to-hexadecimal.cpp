#include <iostream>
using namespace std;

int octalToDec(int n) {
    int num = n;
    int dec_value = 0;
    int base = 1;
    int temp = num;

    while(temp) {
        int last_digit = temp % 10;
        temp = temp/10;

        dec_value += last_digit * base;
        base = base * 8;
    }

    return dec_value;
}

string decToHex(int n) {
    char hex[100];
    int i = 0;

    while(n != 0) {
        int temp = 0;
        temp = n % 16;

        if(temp < 10) {
            hex[i] = temp + 48;
            i++;
        }
        else {
            hex[i] = temp + 87;
            i++;
        }
        n = n/16;
    }
    string ans = "";

    for(int j = i-1; j >= 0; j--) {
        ans += hex[j];
    }
    
    return ans;
}

int main() {
    string hex;
    int dec, oct;
    cout<<"Octal Number: "<<endl;
    cin >> oct;
    dec = octalToDec(oct);
    hex = decToHex(dec);
    cout<<"Hexadecimal Number: "<<hex;
    return 0;
}

Output :-
Octal Number: 12
Hexadecimal Number: a