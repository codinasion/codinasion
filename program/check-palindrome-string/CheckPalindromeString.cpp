#include <iostream>

using namespace std;

bool isPal(string text) {
    string tmp;

    for (int i = text.size() - 1; i >= 0; i--) {
        tmp += text[i];
    }

    if (tmp == text) {
        return true;
    } else {
        return false;
    }
}

int main() {
    string text = "abba";

    if (isPal(text)) {
        cout << "Palindrome String" << endl;
        return 0;
    } else {
        cout << "Not a Palindrome String" << endl;
        return 1;
    }

    return 1;
}