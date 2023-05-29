import java.util.Scanner;

public class FindSumOfNumbersByRecursion {

    static int sum_of_digit(int n) {
        if (n == 0)
            return 0;
        return (n % 10 + sum_of_digit(n / 10));
    }

    public static void main(String args[]) {
        Scanner my_scanner = new Scanner(System.in);
        System.out.print("Input : ");
        int num = my_scanner.nextInt();;
        int result = sum_of_digit(num);
        System.out.println("Sum of digits in " + num + " is " + result);
    }
}
