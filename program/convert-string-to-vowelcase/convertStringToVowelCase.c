#include <stdio.h>

int main()
{
  char mystring[30];
  
  printf("Please input string for conversion: ");

  scanf("%[^\n]s", &mystring);

  for (size_t i = 0; i < sizeof(mystring); i++)
  {
    if (mystring[i] >=65 && mystring[i] <=90)
    {
      mystring[i] += 32;
    }
    
    switch (mystring[i])
    {
    case 'a':
      mystring[i] = 'A';
      break;

    case 'e':
      mystring[i] = 'E';
      break;

    case 'i':
      mystring[i] = 'I';
      break;

    case 'o':
      mystring[i] = 'O';
      break;

    case 'u':
      mystring[i] = 'U';
      break;
    
    default:
      break;
    }
  }  
  printf("Converted string in Vowelcase is %s", mystring);
  
  return 0;
}