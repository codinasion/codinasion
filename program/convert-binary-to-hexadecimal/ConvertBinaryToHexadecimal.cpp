#include <iostream>
#include <string>
#include <bitset>

int main() {
    std::string binary;
    std::cout << "Enter a binary number: ";
    std::cin >> binary;

    // Convert binary string to hexadecimal using bitset
    std::bitset<32> bit(binary); // We assume a 32-bit binary number
    unsigned long hex = bit.to_ulong();

    std::cout << "The hexadecimal equivalent of " << binary << " is: " << std::hex << hex << std::endl;

    return 0;
}