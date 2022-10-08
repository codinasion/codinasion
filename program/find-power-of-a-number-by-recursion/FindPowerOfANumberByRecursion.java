import java.util.Scanner;

class FindPowerOfANumberByRecursion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int number = scanner.nextInt();
        System.out.print("Enter the power: ");
        int power = scanner.nextInt();

        if (power < 0 || number < 0) {
            System.out.println("Invalid input/Power can't be negative");
        } else {
            System.out.println(number + "^" + power + " = " + findPower(number, power));
        }
    }

    private static long findPower(int number, int power) {
        if (power == 0) {
            return 1;
        } else {
            return number * findPower(number, power - 1);
        }
    }
}