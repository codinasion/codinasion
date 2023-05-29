using System;
class HexaToOctal{
public static void Main(string[] args)
{
  int dec = 0;
  Console.WriteLine ("Please enter a hexadecimal value : ");
  string hexa = Console.ReadLine();
  int c = hexa.Length - 1;

  for(int i = 0; i < hexa.Length ; i ++ )
  {
    char ch = hexa[i];
    switch (ch)
    {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        dec = dec + Int32.Parse(ch.ToString())*
                               (int)Math.Pow(16, c);
        c--;
        break;
      case 'a':
      case 'A':
        dec = dec + 10 * (int)Math.Pow(16, c);
        c--;
        break;
      case 'b':
      case 'B':
        dec = dec + 11 * (int)Math.Pow(16, c);
        c--;
        break;
      case 'c':
      case 'C':
        dec = dec + 12 * (int)Math.Pow(16, c);
        c--;
        break;
      case 'd':
      case 'D':
        dec = dec + 13 * (int)Math.Pow(16, c);
        c--;
        break;
      case 'e':
      case 'E':
        dec = dec + 14 * (int)Math.Pow(16, c);
        c--;
        break;
      case 'f':
      case 'F':
        dec = dec + 15 * (int)Math.Pow(16, c);
        c--;
        break;
      default:
        Console.Write("Invalid hexa input");
        break;
    }
  }

  string oct = "";
  while(dec > 0)
  {
    oct = dec % 8 + oct;
    dec = dec / 8;
  }

  Console.Write("Equivalent Octal Value = "+oct);
}
}
