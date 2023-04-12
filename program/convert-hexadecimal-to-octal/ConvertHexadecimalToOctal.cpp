#include <iostream>
#include <string>
#include <unordered_map>
#include <math.h>

using namespace std;

string hex_to_oct(string hex_num) {
    // Map containing hexadecimal to decimal conversion
    unordered_map<char, int> hex_to_dec_map = {
            {'0', 0},
            {'1', 1},
            {'2', 2},
            {'3', 3},
            {'4', 4},
            {'5', 5},
            {'6', 6},
            {'7', 7},
            {'8', 8},
            {'9', 9},
            {'A', 10},
            {'B', 11},
            {'C', 12},
            {'D', 13},
            {'E', 14},
            {'F', 15}
    };
    int decimal = 0;
    int p = hex_num.length() - 1;
    for (char d: hex_num) {
        decimal += pow(16, p) * hex_to_dec_map[d];
        p--;
    }
    string octal_str = "";
    while (decimal != 0) {
        int rest = decimal % 8;
        octal_str = to_string(rest) + octal_str;
        decimal /= 8;
    }
    return octal_str;
}

int main() {
    string hex_num;
    cout << "Type a HexaDecimal number: "; // Type a number and press enter
    cin >> hex_num; // Get user input from the keyboard
    cout << "Your Octal number is:" << endl;
    cout << hex_to_oct(hex_num) << endl;
    return 0;
}