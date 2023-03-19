#include <iostream>
#include <algorithm>
using namespace std;

// Function to check if two strings are anagrams
bool areAnagrams(string str1, string str2) {
    // If the strings have different lengths, they cannot be anagrams
    if (str1.length() != str2.length()) return false;
    
    // Sort both strings
    sort(str1.begin(), str1.end());
    sort(str2.begin(), str2.end());
    
    // If the sorted strings are equal, they are anagrams
    return str1 == str2;
}

int main() {
    string s1, s2;
    
    // Take input from user for both strings
    cin>> s1 >> s2;
    
    // Check if the strings are anagrams and output result
    if (areAnagrams(s1, s2)) cout << "Anagram Strings" << endl;
    else cout << "Not Anagram Strings" << endl;
}
