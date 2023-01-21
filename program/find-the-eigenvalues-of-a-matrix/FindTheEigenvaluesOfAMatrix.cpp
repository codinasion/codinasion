#include<iostream>
#include<conio.h>
#include<math.h>
using namespace std;
int main()
{ int i,j,x,b,c,n;
int d,e,k,l,f,a[100][100],g;
cout<<"enter the order of matrix";
cin>>n;
cout<<"enter the value of the matrix ";
for(i=0;i<n;i++)
{for(j=0;j<n;j++)
{ cin>>a[i][j];
}
}

cout<<"show the matrix ";
cout<<" \n ";
for(i=0;i<n;i++)
{for(j=0;j<n;j++)
{cout<<a[i][j];
} cout<<" \n ";
}
double det = a[0][0] * (a[1][1] * a[2][2] - a[2][1] * a[1][2]) -
                 a[0][1] * (a[1][0] * a[2][2] - a[1][2] * a[2][0]) +
                 a[0][2] * (a[1][0] * a[2][1] - a[1][1] * a[2][0]);
                 
double trace = a[0][0] + a[1][1] + a[2][2];
double x1 = trace/3;
    double x2 = (trace * trace - 3 * det)/9;
    double x3 = 2 * sqrt(x2) * cos(acos(x2/2)/3);
double eig1 = x1 + x3;
    double eig2 = x1 - x3/2 + sqrt(3)*x3/2;
    double eig3 = x1 - x3/2 - sqrt(3)*x3/2;
    //Print the eigen values
    cout << "Eigen value 1 = " << eig1 << endl;
    cout << "Eigen value 2 = " << eig2 << endl;
    cout << "Eigen value 3 = " << eig3 << endl;


}
