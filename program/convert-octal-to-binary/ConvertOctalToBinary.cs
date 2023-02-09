using System;
public class OctalToBinary
{
    public static void Main()
    {
        long n1, n2, k = 1;
        long decimal_number = 0, i = 1, j, d;
        long binary_number = 0;
        Console.Write("Input an octal number : ");
        n1 = Convert.ToInt32(Console.ReadLine());
        n2 = n1;
        for (j = n1; j > 0; j /= 10)
        {
            d = j % 10;
            if (i == 1)
                k *= 1;
            else
                k *= 8;
            decimal_number = decimal_number + (d * k);
            i++;
        }
        i = 1;
        for (j = decimal_number; j > 0; j /= 2)
        {
            binary_number = binary_number + (decimal_number % 2) * i;
            i *= 10;
            decimal_number /= 2;
        }
        Console.Write("The equivalent binary number: {1} \n\n", n2, binary_number);
        Console.ReadKey();
    }
}
