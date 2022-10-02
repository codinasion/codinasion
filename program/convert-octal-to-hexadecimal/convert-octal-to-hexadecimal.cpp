#include <bits/stdc++.h>
using namespace std;

int octalToDecimal(int n) {
    int num = n;
    int decimal = 0;
    int base = 1;
    int temp = num;
    while (temp) {
        int last_digit = temp % 10;
        temp = temp / 10;
        decimal += last_digit * base;
        base = base * 8;
    }
    return decimal;
}

string octalToHexa(int m) {
    int n = octalToDecimal(m);
    char hexaDeciNum[100];
    int i = 0;
    while (n != 0) {
        int temp = 0;
        temp = n % 16;
        if (temp < 10) {
            hexaDeciNum[i] = temp + 48;
            i++;
        } else {
            hexaDeciNum[i] = temp + 87;
            i++;
        }
        n = n / 16;
    }

    string ans = "";
    for (int j = i - 1; j >= 0; j--) {
        ans += hexaDeciNum[j];
    }
    return ans;
}


int main() {
    int n;
    cin >> n;

    cout << octalToHexa(n) << endl;
}