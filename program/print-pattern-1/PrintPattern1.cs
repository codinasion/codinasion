using System;

public class pattern {
    public static void Main(string[] args) {
        Console.WriteLine("Enter length of pattern: ");
        int n = Convert.ToInt32(Console.ReadLine());
        int i, j, num;
        for (i = 0; i < n; i++) {
            num = 1;
            for (j = 0; j <= i; j++) {
                Console.Write(num + " ");
                num++;
            }
            Console.WriteLine();

        }
    
    }

}