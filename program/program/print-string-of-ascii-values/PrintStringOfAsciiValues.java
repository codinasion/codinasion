import java.util.Scanner;
import java.util.ArrayList;
public class PrintStringOfAsciiValues {
    public static void main(String[] args) {

        Scanner scnr = new Scanner(System.in);
        char character;
        int asciivalue;
        String output = "";

        System.out.println("Enter the ASCII values separated by spaces and press enter 2 times to finish: ");
        ArrayList<Integer> numbers = new ArrayList<>();

        String line = scnr.nextLine();
        while (!line.isEmpty()) {
            String[] values = line.split("\\s+");
            for (String value : values) {
                try {
                    int intValue = Integer.parseInt(value);
                    numbers.add(intValue);
                } catch (NumberFormatException e) {
                    System.out.println("Invalid input: " + value);
                }
            }
            line = scnr.nextLine();
        }

        for (int i = 0; i < numbers.size(); i++) {
            asciivalue = (numbers.get(i));
            character = (char) asciivalue;
            output += character;
        }

        System.out.println(output);

        scnr.close();
    }
}
