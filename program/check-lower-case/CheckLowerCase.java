import java.util.Scanner;

public class CheckLowerCase {
    public static void main(String []args) {
        Scanner my_scanner = new Scanner(System.in);
        System.out.print("Enter a character : ");
        String val = my_scanner.next();
        char ch = val.charAt(0);
        if (Character.isLowerCase(ch)) {
            System.out.println("Lower Case");
        } else {
            System.out.println("Upper Case");
        }
    }
}
