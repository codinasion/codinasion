import java.util.Scanner;

public class ConvertStringToUppercase {

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();
        scanner.close();
        System.out.println(str.toUpperCase());
    }
}
