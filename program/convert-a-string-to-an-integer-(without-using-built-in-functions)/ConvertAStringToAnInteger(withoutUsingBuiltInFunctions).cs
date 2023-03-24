using System;
class StringToInteger{
public static void convert(string s) 
{ 
    int num = 0; 
    int n = s.Length; 

    for(int i = 0; i < n; i++) 
        num = num * 10 + ((int)s[i] - 48); 
    Console.Write(num); 
} 
  
public static void Main(string[] args)
{
    string s = "123"; 
    convert(s); 
}
}
