#include <iostream>

int main() {
  std::string s;

  std::cout << "Enter the input" << std::endl;

  std::getline(std::cin, s);

  int strLen = s.length();

  for(int i = 0; i < strLen; i++) {
    char ch = s[i];
    s[i] = toupper(ch);
  }


  std::cout << "Output: " << s << std::endl;

}