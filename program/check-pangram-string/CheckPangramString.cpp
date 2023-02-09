#include <iostream>

using namespace std;

bool IsPangram(string str);

int main()
{
    string str;
    cout << "Input  : ";
    getline(cin,str);

    cout << "Output : ";
    if(IsPangram(str) == 1) {
        cout << "Pangram sentence";
    } else {
        cout << "Not a Pangram sentence";
    }

    return 0;
}

bool IsPangram(string str)
{
    int arr[26] = {0};

    for(size_t i = 0; i < str.size(); ++i) {
        if((tolower(str[i]) >= 'a') && (tolower(str[i]) <= 'z')) {
            ++arr[tolower(str[i]) - 'a'];
        }
    }

    for(size_t i = 0; i < 26; ++i) {
        if(!arr[i]) {
            return false;
        }
    }

    return true;
}
