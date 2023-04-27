using System;

public class FindSumOfNumbersByRecursion {

    public int sumOfNumbersByRecursion(int n) {
        int sum;
        if (n == 1){
            return 1;
        }
        else{
            sum = sumOfNumbersByRecursion(n - 1) + n;
            return sum;
        }
    }
    public static void Main(String[] args){
        FindSumOfNumbersByRecursion n = new FindSumOfNumbersByRecursion();
        Console.Write("Input  : ");
        for(int i = 1; i <= 5; i++){
            Console.Write(i + " ");
        }
        Console.WriteLine(" ");
        Console.WriteLine("Output : {0}", n.sumOfNumbersByRecursion(5));

    }
}
        
