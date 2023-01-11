using System;
class SPLIT {
      
    static void Main(string[] args)
    {
        String str = "hello world";
        char[] spearator = { ' ' };
        String[] strlist = str.Split(spearator);
        
        foreach(String s in strlist)
        {
            Console.WriteLine(s);
        }
        Console.ReadKey();
    }
}
