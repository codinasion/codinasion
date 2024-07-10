using System;
class GFG
{
  
static void TwelveHourFormat(string str)
{
    int h1 = (int)str[0] - '0';
    int h2 = (int)str[1]- '0';
  
    int hh = h1 * 10 + h2;
  
    string Meridien;
    if (hh < 12) {
        Meridien = "AM";
    }
    else
        Meridien = "PM";
  
    hh %= 12;

    if (hh == 0) {
        Console.Write("12");

        for (int i = 2; i < 8; ++i) {
        Console.Write(str[i]);
        }
    }
    else {
        Console.Write(hh);
        for (int i = 2; i < 8; ++i) {
        Console.Write(str[i]);
        }
    }

Console.WriteLine(" "+Meridien);
}
  
public static void Main()
{
    string str = "12:05:45";
    TwelveHourFormat(str);
  
}
}
