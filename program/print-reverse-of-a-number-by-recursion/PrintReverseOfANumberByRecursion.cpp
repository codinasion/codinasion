#include <bits/stdc++.h>
using namespace std;
void reverseANumber(int n){
    if(n<=9) cout<<n<<'\n';
    else{
        cout<<(n%10);
        reverseANumber(n/10);
    }    
}
int main(){
    int num; //123
    cin>>num;
    reverseANumber(num); //321
    return 0;
}

//Contributed by Raghav Garg 