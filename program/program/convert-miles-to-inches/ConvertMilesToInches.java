import java.util.Scanner;

public class ConvertMilesToInches {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int miles;
        int inches;

        System.out.print("Input: ");
        miles = input.nextInt();

        input.close();

        inches = miles * 63360;

        System.out.printf("Output: %d", inches);
        System.out.println();
    }
}
