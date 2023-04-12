#include <iostream>
#include <string>
#include <unordered_map>
#include <stdexcept>

using namespace std;

string hex_to_bin(string hex_num) {
    // Map containing hexadecimal to binary conversion
    unordered_map<char, string> hex_to_binary_map = {
            {'0', "0000"},
            {'1', "0001"},
            {'2', "0010"},
            {'3', "0011"},
            {'4', "0100"},
            {'5', "0101"},
            {'6', "0110"},
            {'7', "0111"},
            {'8', "1000"},
            {'9', "1001"},
            {'A', "1010"},
            {'B', "1011"},
            {'C', "1100"},
            {'D', "1101"},
            {'E', "1110"},
            {'F', "1111"}
    };
    string binary_str = "";
    for (char d: hex_num) {
        if (!hex_to_binary_map.count(d)) {
            throw invalid_argument("Invalid hexadecimal digit: " + string(1, d));
        }
        binary_str = binary_str + hex_to_binary_map[d];
    }
    return binary_str;
}

int main() {
    string hex_num;
    cout << "Type a HexaDecimal number: "; // Type a number and press enter
    cin >> hex_num; // Get user input from the keyboard
    try {
        cout << "Your Binary number is:" << endl;
        cout << hex_to_bin(hex_num) << endl;
    } catch (invalid_argument& e) {
        cerr << e.what() << endl;
        return 1;
    }
    return 0;
}
