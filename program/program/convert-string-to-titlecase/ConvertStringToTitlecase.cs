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

            //input
            String text = Console.ReadLine();
            //output
            Console.WriteLine(textinfo.ToTitleCase(text));
        }
    }
}

