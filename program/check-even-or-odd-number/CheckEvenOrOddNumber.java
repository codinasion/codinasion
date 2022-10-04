import java.util.Scanner;

public class CheckEvenOrOddNumber {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n % 2 == 0) System.out.println("Even Number");
        else System.out.println("Odd Number");
    }
}
