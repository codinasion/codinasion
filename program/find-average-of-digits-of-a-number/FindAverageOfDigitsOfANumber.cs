using System;

public class FindAverageOfDigitsOfANumber {
    public static void Main(String[] args){
    
    	void avgOfDigitsOfNumber(int n) {
            int sum = 0;
            int count = 0;
            for (int i = n; i > 0; i = i / 10) {
                sum += i % 10;
                count++;
            }
            Console.Write(sum / count);
        }

        Console.Write("Input  : ");
        int n = Convert.ToInt32(Console.ReadLine());
        Console.Write("Output : ");
        avgOfDigitsOfNumber(n);
    }

}