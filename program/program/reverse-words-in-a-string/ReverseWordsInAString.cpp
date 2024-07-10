#include <iostream>
#include <sstream>
#include <vector>

void reverseWords(std::string& str) {
    std::istringstream iss(str);
    std::vector<std::string> words;

    // Split the string into words
    while (iss >> str) {
        words.push_back(str);
    }

    // Reverse the order of words
    std::reverse(words.begin(), words.end());

    // Construct the reversed string
    str.clear();
    for (const auto& word : words) {
        str += word + " ";
    }

    // Remove the trailing space
    if (!str.empty()) {
        str.pop_back();
    }
}

int main() {
    std::string input;
    
    // Input string
    std::cout << "Enter a string: ";
    std::getline(std::cin, input);

    // Reverse the words in the string
    reverseWords(input);

    // Output the reversed string
    std::cout << "Reversed string: " << input << std::endl;

    return 0;
}
