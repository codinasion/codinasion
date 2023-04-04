import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.Scanner;

public class CheckValidDate {

    public static boolean isDateValid(String input) {
        try {
            LocalDate.parse(input);
            return true;
        } catch (DateTimeParseException e) {
            return false;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a date in the format 'yyyy-mm-dd':");
        String input = scanner.nextLine();

        if (isDateValid(input)) {
            System.out.println("True");
        } else {
            System.out.println("False");
        }
    }
}
