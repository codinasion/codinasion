using System;

public class ConvertStringToVowelcase
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Enter a text to convert");
        var text = Console.ReadLine();
        Console.WriteLine(ConvertTextToVowelCase(text ?? ""));
        Console.ReadLine();
    }

    private static string ConvertTextToVowelCase(string text)
    {
        var result = string.Empty;

        foreach (var letter in text)
        {
            switch (letter) { 
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    result += char.ToUpper(letter);
                    break;
                default:
                    result += char.ToLower(letter);
                    break;
            }
        }

        return result;
    }
}
