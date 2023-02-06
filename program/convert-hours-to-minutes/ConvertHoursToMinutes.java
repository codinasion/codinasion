import java.util.Scanner;

/**
 * ConvertHoursToMinutes
 */
public class ConvertHoursToMinutes {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Input: ");
        int x = sc.nextInt();
        sc.close();
        System.out.println("Output: " + (x * 60));
    }
}
