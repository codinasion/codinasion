import java.util.Scanner;

public class CheckDigit {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char ch = sc.nextLine().charAt(0);
        sc.close();

        if (ch >= '0' & ch <= '9') {
            System.out.println("Digit");
        } else {
            System.out.println("Not a Digit");

        }
    }
}
