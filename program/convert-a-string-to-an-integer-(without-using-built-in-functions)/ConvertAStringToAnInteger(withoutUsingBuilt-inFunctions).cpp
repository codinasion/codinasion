// C++ program for the above approach
#include <iostream>
using namespace std;

// Function to convert string to
// integer without using functions
void StringToIntConvert(string s)
{
	// Initialize a variable
	int num = 0;
	int n = s.length();

	// Iterate till length of the string
	for (int i = 0; i < n; i++)

		// Subtract 48 from the current digit
		num = num * 10 + (int(s[i]) - 48);

	// Print the answer
	cout << num;
}


int main()
{
	// Given string of number
	char s[20];

cout<<"Enter string: ";
cin.get(s,20);

	// Function Call
	StringToIntConvert(s);
	return 0;
}
