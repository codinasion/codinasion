#include <iostream> 
#include <algorithm> 
#include <iomanip>
using namespace std;  
int main()  
{  
    double Pi = 3.14285714286;  // Pi = π 
    double Radius, Height; 
    cin>>Radius>>Height;   
    double ans = Pi*(Radius*Radius)*Height/3;
    cout << fixed <<setprecision(15);
    cout<<ans;
    return 0;  
}