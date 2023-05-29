using System;

public class ConvertStringToDotcase
{
    /// <summary>
    /// Converts the given String to dot case, which replaces all the spaces by dots
    /// </summary>
    /// <example>
    /// <code>
    /// // Usage
    /// Console.WriteLine(convertStringToDotcase("Hello World"));
    /// // Output
    /// hello.world
    /// </code>
    /// </example>
    /// <param name="s"></param>
    /// <returns></returns>
    public static string convertStringToDotcase(string s)
    {
        return s.ToLower().Replace(' ', '.');
    }

	public static void Main() {
	    Console.WriteLine("Enter a string :");
	    string demoInput = Console.ReadLine();
	    Console.WriteLine(convertStringToDotcase(demoInput));
	}
}