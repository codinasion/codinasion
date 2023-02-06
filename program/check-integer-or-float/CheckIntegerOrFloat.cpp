// C++ Program to Check Whether a Number is Integer or Not using While loop

#include <iostream>

using namespace std;

int main() {

    char random_number[100];

    int f = 0, i = 0;

    cout << "Enter the number to check integer or float: ";

    cin >> random_number;

    while (random_number[i++] != '\0') {

        if (random_number[i] == '.') {

            f = 1;

            break;

        }

    }

    if (f)

        cout << endl << random_number << " is a floating-point number.\n";

    else

        cout << endl << random_number << " is an integer number.\n";

    return 0;

}
