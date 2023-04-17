using System;
class CamelCase
{
    static void convert(String s)
    {
        int cnt= 0;
        int n = s.Length;
        char []ch = s.ToCharArray();
        int res_ind = 0;
 
        for (int i = 0; i < n; i++)
        {
            if (ch[i] == ' ')
            {
                cnt++;
                ch[i + 1] = char.ToUpper(ch[i + 1]);
                continue;
            }
            else
                ch[res_ind++] = ch[i];
        }
 
        for(int i = 0; i < n - cnt; i++)
            Console.Write(ch[i]);
    }
 
    public static void Main(String []args)
    {
        String str = "hello world";
        convert(str);
    }
}
