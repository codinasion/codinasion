using System;
using System.Globalization;

namespace TitleCase
{
    class Program
    {
        static void Main(string[] args)
        {
            var textinfo = new CultureInfo("en-US", false).TextInfo;
            var textInfo = CultureInfo.CurrentCulture.TextInfo;
            Console.WriteLine("Input: ");
            String text = Console.ReadLine();
            Console.WriteLine(textinfo.ToTitleCase(text));
        }
    }
}
