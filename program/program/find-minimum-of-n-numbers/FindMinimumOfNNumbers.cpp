#include<iostream>
using namespace std;

int main(){
    int min,k;
    cin>>min;
    while(cin>>k){
        if(k<min){
            min=k;
        }
    }
    cout<<min;
}
