import java.util.Scanner;

class ConvertDecimalToOctal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a decimal number: ");
        int decimal = scanner.nextInt();
        String octal = "";
        while (decimal != 0) {
            int remainder = decimal % 8;
            octal = remainder + octal;
            decimal = decimal / 8;
        }
        System.out.println("Octal number is: " + octal);
    }
}