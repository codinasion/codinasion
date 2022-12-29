#include <iostream>
#include <string>
#include <cctype>

using namespace std;

// Replaces all characters in string to the opposite case
string AlternateCase(string str) {
	int len = str.length();
	for (int i = 0; i < len; i++) {
		if (isupper(str[i])) {
			str[i] = tolower(str[i]);
		}
		else if (islower(str[i])) {
			str[i] = toupper(str[i]);
		}
	}
	return str;
}


int main()
{
	string str = "Hello World";
	str = AlternateCase(str);
	cout << str;
}