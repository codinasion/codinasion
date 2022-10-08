#include<iostream>
using namespace std;
int main(){

    int a[1000];
    int key;
    int n;
    cout<<"Enter no of elements";
    cin>>n;

    cout<<"Enter "<<n<<" elements";

    for(int i =0;i<n;i++){
        cin>>a[i];
    }

    //Linear serach algorithm

    cout<<"Enter the element to be searched";
    cin>>key;

    int i;
    for( i=0;i<=n-1;i++){
        if( a[i]==key){
            cout<<key<<" found at "<<i<<" index";
            break;
        }
    }
    if (i == n){
        cout<<"key is not present";
    }

    return 0;
}
