#include <string>
#include <cmath>

using namespace std;

int ConvertAStringToAnInteger(string str) {
	int sign;
	if (str[0] == '-') {
		sign = -1;
		str = str.substr(1);
	}
	else {
		sign = 1;
	}

	int n = 0;
	for (int i = 0; i < str.size(); i++) {
		n += (str[i] - '0') * pow(10,str.size() - i -1); // char - '0' == (int) char
	}

	return n;
}