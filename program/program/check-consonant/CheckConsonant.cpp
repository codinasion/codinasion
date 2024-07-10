/**
    Write a C++ program to check consonant

    Check if a character is a consonant.

    Input  : b
    Output : Consonant
 */

#include <iostream>
using namespace std;

bool checkConsonant(char c){
    c = tolower(c);
    if(c != 'a' && c != 'o' && c != 'i' && c != 'o' && c != 'u'){
        return true;
    }
    return false;
}

int main(){
    char n;
    cout << "Enter a character: ";
    cin >> n;
    if(checkConsonant(n)) cout << "Given character is a consonant" << endl;
    else cout << "Given character is not a consonant" << endl;
    return 0;
}