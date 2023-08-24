using System;


namespace ConvertStringToSentencecase
{
	internal class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Enter a sentence");
			string sentence = Console.ReadLine();
			Console.WriteLine(ToSentenceCase(sentence));
			Console.ReadLine();
		}

		static string ToSentenceCase(string sentence)
		{
			if (string.IsNullOrEmpty(sentence))
			{
				return sentence;
			}

			sentence = char.ToUpper(sentence[0]) + sentence.Substring(1);

			return sentence;
		}
	}
}
