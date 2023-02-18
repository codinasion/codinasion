using System;
class ConsonantCase{
 
static void conVowUpp(char[] str)
{

  int N = str.Length;
  for (int i = 0; i < N; i++)
  {
    if (str[i] == 'a' || str[i] == 'e' ||
        str[i] == 'i' || str[i] == 'o' ||
        str[i] == 'u')
    {
      char c = char.ToLowerInvariant(str[i]);
      str[i] = c;
    } else {
      char c = char.ToUpperInvariant(str[i]);
      str[i] = c;
    }
  }
  foreach(char c in str)
    Console.Write(c);
}
 
public static void Main(String[] args)
{
  Console.Write("Enter a string : ");
  String str = Console.ReadLine();
  conVowUpp(str.ToCharArray());
}
}
 
