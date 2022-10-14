#include <iostream>
using namespace std;

void charCheck(char input_char){
	if ( !(((input_char >= 65 && input_char <= 90) || (input_char >= 97 && input_char <= 122))) && !(input_char >= 48 && input_char <= 57)  )
		cout << "Special Character ";
    else 
        cout<<"Not A Special Character";
}

// Driver Code
int main()
{
	char input;
    cin>>input;
	charCheck(input);
	return 0;
}