import java.util.Scanner;

public class ConvertInchesToMiles {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter Inches:");
            int inches = sc.nextInt();

            int mile = inches/63360;
            System.out.println("Miles:"+mile);
        }
    }
}
