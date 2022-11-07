#include <iostream>

using namespace std;

int main()

{

    int i , j , sum = 0 , a[3][3] ;

    cout << "Trace matrix in 2D array " << endl ;

    cout << "Enter Array Elements : " << endl ;

    // loop for taking inputs in array

    for (i = 0 ; i < 3 ; i++)

    {

        for (j = 0 ; j < 3 ; j++)

        {

            cin >> a[i][j] ;

        }

    }

    // loop for printing array elements

     for (i = 0 ; i < 3 ; i++)

    {

        for (j = 0 ; j < 3 ; j++)

        {

           cout <<  a[i][j]  << " ";

        }

        cout << endl ;

    }

    //loop for finding trace of matrix

    for(i = 0 ; i < 3 ; i++)

    {

        for (j = 0 ; j < 3 ; j++)

        {

            if (i==j)

            {

                sum+=a[i][j] ;

            }

        }

    }

    cout << "Trace of matrix : " << sum << endl ;

    return 0;

}
