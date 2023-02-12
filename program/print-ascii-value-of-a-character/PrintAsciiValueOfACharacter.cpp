#include <iostream>

int main() {
  std::string s;

  std:: cout << "Enter the single character: ";

  std::getline(std::cin, s);

  if(s.length() > 1) {
    std::cout << "Error: enter a single character only" << std::endl;
    return 1;
  }

  std:: cout << (int) s[0] << std:: endl;

  return 0;
}