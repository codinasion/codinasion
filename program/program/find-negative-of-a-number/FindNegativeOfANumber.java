import java.util.Scanner;

public class FindNegativeOfANumber {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = Integer.parseInt(scanner.nextLine());
        System.out.println(computeNegative(number));
        scanner.close();
    }

    public static int computeNegative(int number) {
        return -1 * number;
    }
}
