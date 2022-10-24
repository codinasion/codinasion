import java.util.Scanner;

public class ConvertStringToConstantcase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.nextLine();
        System.out.print("Input: ");
        String b = a.replace(' ', '_');
        System.out.println(b.toUpperCase());

        sc.close();
    }
}
