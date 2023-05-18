using System;
using System.Globalization;

public class ConvertStringToPascalCase{
    public static void Main(){
        Console.WriteLine("Enter a string to convert it to PascalCase: ");
        string demoInput = Console.ReadLine();
        Console.WriteLine(converStringToPascalCase(demoInput).Replace(" ",""));
    }
    
    static string converStringToPascalCase(string s){
        TextInfo myTI = new CultureInfo("en-US",false).TextInfo;
        return myTI.ToTitleCase(s);
    }
}
