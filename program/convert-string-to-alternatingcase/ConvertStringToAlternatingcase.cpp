#include <iostream>
#include <string>
#include <cctype>

using namespace std;

// Replaces all characters in string to the opposite case
string AlternateCase(string str) {
	int len = str.length();
	bool cap = false;
	for (int i = 0; i < len; i++) {
		if (cap == false) {
			str[i] = toupper(str[i]);
			cap = true;
		}
		else if (cap == true) {
			str[i] = tolower(str[i]);
			cap = false;
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