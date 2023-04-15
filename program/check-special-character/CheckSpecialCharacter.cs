using System;
using System.Text.RegularExpressions;
class SpecialCharacters{

public static void onlySpecialchars(String str)
{
String regex = "[^a-zA-Z0-9]+";

Regex rgex = new Regex(regex);

if (str == null)
{
	Console.WriteLine("Not a Special Character");
	return;
}

MatchCollection matchedAuthors = rgex.Matches(str);

if (matchedAuthors.Count != 0)
	Console.WriteLine("Special Character");
else
	Console.WriteLine("Not a Special Character");
}

public static void Main(String []args)
{

String str = "@";

onlySpecialchars(str);
}
}
