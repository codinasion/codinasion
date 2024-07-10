using System;
class Pangram {
    public static bool checkPangram(string str)
    {
        bool[] mark = new bool[26];
        int index = 0;

        for (int i = 0; i < str.Length; i++) {
            if ('A' <= str[i] && str[i] <= 'Z')
                index = str[i] - 'A';
            else if ('a' <= str[i] && str[i] <= 'z')
                index = str[i] - 'a';
            else
                continue;

            mark[index] = true;
        }
 
        for (int i = 0; i <= 25; i++)
            if (mark[i] == false)
                return (false);
        return (true);
    }
 
    public static void Main()
    {
        string str = "The quick brown fox jumps over the lazy dog";
 
        if (checkPangram(str) == true)
            Console.WriteLine(str + " \n is a pangram.");
        else
            Console.WriteLine(str + " \n is not a pangram.");
    }
}
 
