public class ConvertDaysToSeconds
{
	private const int NoOfHoursInADay = 24;
    private const int NoOfMinutesForAnHour = 60;
    private const int NoOfSecondsForAMinute = 60;

    public static void Main()
    {
		Console.WriteLine("Please enter the no. of days to be converted to seconds");
		
        string userInput = Console.ReadLine();
        double value;

        if (double.TryParse(userInput, out value) && Convert.ToDouble(userInput) > 0)
        {
			Console.WriteLine($"Converted amount in seconds :  {CalculateSecondsForDays(Convert.ToDouble(userInput))}");
		}
        else
        {
			Console.WriteLine("INVALID INPUT !!!");
        }
    }

    private static double CalculateSecondsForDays(double noOfDays)
    {
		double totalHours = Convert.ToDouble(noOfDays) * NoOfHoursInADay;
        double totalMinutes = totalHours * NoOfMinutesForAnHour;
        return totalMinutes * NoOfSecondsForAMinute;
    }
}