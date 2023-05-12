using System;
class OctalToDecimal
{
    public static void Main()
    {
        Console.WriteLine("Enter an Octal number : ");
        int OctalNumber = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine($"Equivalent Decimal number : {Octal_Decimal(OctalNumber)}");
        Console.ReadKey();
    }

    private static int Octal_Decimal(int OctalNumber)
    {
        int Decimal_Number = 0;
        int BASE = 1;
        int temp = OctalNumber;

        while (temp > 0)
        {
            int last_digit = temp % 10;
            temp /= 10;
            Decimal_Number += last_digit * BASE;
            BASE *= 8;
        }

        return Decimal_Number;
    }
}
