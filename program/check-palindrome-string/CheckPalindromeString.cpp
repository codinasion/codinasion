#include <iostream>

using namespace std;

bool isPal (string text)
{

  int n = text.length ();
    
  for (int i = 0; i < n / 2; i++)
  {
    if (text[i] != text[n - i - 1])
      return false;
  }
  return true;
}

int main ()
{
  string text = "abba";

  if (isPal (text))
    {
      cout << "Palindrome String" << endl;
      return 0;
    }
  else
    {
      cout << "Not a Palindrome String" << endl;
      return 1;
    }

  return 1;
}
