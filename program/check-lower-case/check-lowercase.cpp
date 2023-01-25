#include <iostream>
using namespace std;

void checkLowerCase(char ch){
    if(ch >= 'a' && ch <= 'z'){
        cout << "Lower Case";
    }
    else if(ch >= 'A' && ch <= 'Z'){
        cout << "Upper Case";
    }
    else{
        cout << "The character is not an alphabet";
    }
}

int main(){
    char ch;
    cout << "Enter a character: ";
    cin >> ch;
    checkLowerCase(ch);
    return 0;
}
