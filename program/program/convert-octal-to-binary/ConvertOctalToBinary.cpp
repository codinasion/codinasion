#include<iostream>

using namespace std;

int main()

{

    int num,p=1;

    int decmal=0,i=1,j,d;

    int  binary=0;

    cout<<"Enter a number in octal (using digit 0 - 7) :";

	cin>>num;	j=num;

	do

	{

          d = j % 10;

            if(i==1)

                  p=p*1;

            else

                 p=p*8;

      decmal=decmal+(d*p);

	   i++;

	   j=j/10;

	   }

	   while(j>0);

	   i=1;

	   j=decmal;

	   do

	   {

	   	 binary=binary+(decmal % 2)*i;

        i=i*10;

        decmal=decmal/2;

        j=j/2;

	   }

	   while(j>0);

	   cout<<"Octal number into Binary number   "<<binary;

}
