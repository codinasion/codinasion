import java.util.*;

public class CheckArmstrongNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        int n = number;
        int sum = 0;

        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit * digit;
            n /= 10;
        }

        System.out.println(sum == number);
        sc.close();
    }
}