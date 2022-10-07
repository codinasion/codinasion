// C++ program for Fibonacci Series
// using Dynamic Programming
#include <bits/stdc++.h>
using namespace std;

vector<int> fibonacciWithoutRecursion(int n)
{
  vector<int> fib(n);
  int i;

  fib[0] = 0;
  fib[1] = 1;

  for (i = 2; i < n; i++)
  {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

int main()
{
  int n=5;

  for(auto i: fibonacciWithoutRecursion(n))
  {
    cout << i << " ";
  }
  
  return 0;
}

//Output:
// 0 1 1 2 3