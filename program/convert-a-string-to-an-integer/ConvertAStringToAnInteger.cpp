#include <iostream>

using namespace std;

int string_to_integer(string str) {
	return stoi(str);
}

int main() {
	string s;
	cin >> s;
	cout << string_to_integer(s);
	return 0;
}