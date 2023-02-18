#include <iostream>
using namespace std;

string reversecase(string str){
    for (int i = 0; i < str.length(); i++){
        if (str[i] >= 'a' && str[i] <= 'z')
            str[i] = str[i] - 32;
        else if (str[i] >= 'A' && str[i] <= 'Z')
            str[i] = str[i] + 32;
    }
    return str;
}

int main(){
    string str;
    cout << "Enter a string: ";
    getline(cin, str);
    cout << reversecase(str);
    return 0;
}