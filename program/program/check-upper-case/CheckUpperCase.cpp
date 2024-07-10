#include <iostream>

using namespace std;

int main()
{
    char alphabet;
    cin>>alphabet;
    if(int(alphabet)>=65 && int(alphabet)<=90){
        cout<<"Upper Case"<<endl;
    }else{
        cout<<"Not Upper Case"<<endl;
    }
    return 0;
}
