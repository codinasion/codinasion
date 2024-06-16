using System;

namespace JulianDateConverter
{
    class Program
    {
        static void Main(string[] args)
        {
            // Test the conversion functions
            Console.WriteLine("Convert standard date format to Julian date:");
            string standardDate = "2022-04-01";
            string julianDate = StandardDateToJulian(standardDate);
            Console.WriteLine($"{standardDate} => {julianDate}");

            Console.WriteLine("\nConvert Julian date to standard date format:");
            string julianDateInput = "22-091";
            string standardDateOutput = JulianToStandardDate(julianDateInput);
            Console.WriteLine($"{julianDateInput} => {standardDateOutput}");
        }

        // Function to convert standard date format (yyyy-mm-dd) to Julian date (yy-ddd)
        static string StandardDateToJulian(string standardDate)
        {
            DateTime date = DateTime.Parse(standardDate);
            int year = date.Year % 100;
            int dayOfYear = date.DayOfYear;
            return $"{year:D2}-{dayOfYear:D3}";
        }

        // Function to convert Julian date (yy-ddd) to standard date format (yyyy-mm-dd)
        static string JulianToStandardDate(string julianDate)
        {
            int year = int.Parse(julianDate.Substring(0, 2));
            int dayOfYear = int.Parse(julianDate.Substring(3));

            DateTime date = new DateTime(2000 + year, 1, 1).AddDays(dayOfYear - 1);
            return date.ToString("yyyy-MM-dd");
        }
    }
}
