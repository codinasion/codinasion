// Sum of Digits of a number
//Time complexity O(N) and space Complexity O(1);

#include <bits/stdc++.h>
#define ll long long
using namespace std;

int main(){
    string input;   cin>>input;
    ll sum=0;
    // cout<< (int)'1';
    for(int i=0;i<input.length();i++){
        sum+= ((int)input[i]-48);  //Ascii value of '1' is 49. So if (int)'1'-48 --> 49-48 = 1; similarly if (int)'2' - 48 --> 50 - 48 = 2;
    }

    cout<<sum<<endl;
    return 0;
}

/*
Contributed by : Kartikeya Saini
*/