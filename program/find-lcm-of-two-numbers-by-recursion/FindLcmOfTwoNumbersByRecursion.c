
#include <stdio.h>

// function to find min element 

int Min(int Num1, int Num2)
{
	return Num1 >= Num2?Num2:Num1; 
			
}

// function to find lcm of two numbers 
int LCMUtil(int Num1, int Num2, int K)
{
	// If either of the two numbers is 1, return their product

	if (Num1 == 1 || Num2 == 1)
		return Num1 * Num2;

	// If both the numbers are equal
	if (Num1 == Num2)
		return Num1;

	// If K is smaller than the  minimum of the two numbers
	
	if (K <= Min(Num1, Num2)) {


		if (Num1 % K == 0 && Num2 % K == 0) {

			
			return K * LCMUtil(
						Num1 / K, Num2 / K, 2);
		}

		
		else
			return LCMUtil(Num1, Num2, K + 1);
	}


	else
		return Num1 * Num2;
}


void LCM(int N, int M)
{
	// Stores LCM of two number
	int lcm = LCMUtil(N, M, 2);

	// Print LCM
	printf("%d", lcm);
}

// Driver Code
int main()
{

  int N,M; 
  scanf("%d", &N);
  scanf("%d", &M); 

	LCM(N, M);

	return 0;
}
