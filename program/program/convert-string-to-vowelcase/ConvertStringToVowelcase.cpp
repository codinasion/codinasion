#include <iostream>
#include <string>

using namespace std;

int main() {
	string str;

	cout << "Enter the string:" << endl;

	getline(cin, str);

	for (char &c : str) {
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        c = toupper(c);
    } else if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
        continue;
    } else {
        c = tolower(c);
    }
	}

	cout << "String to vowel case:\n" << str << endl;

	return 0;
}