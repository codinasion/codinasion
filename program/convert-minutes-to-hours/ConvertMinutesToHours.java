import java.util.Scanner;

public class ConvertMinutesToHours {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            System.out.print("Enter Minutes:");
            int minutes = input.nextInt();

            float hours = minutes / 60;

            System.out.println("Time in Hours is: " + hours + " hour");
        }

    }
}
