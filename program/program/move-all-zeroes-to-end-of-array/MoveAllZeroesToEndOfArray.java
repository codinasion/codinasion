import java.util.Scanner;

public class MoveAllZeroesToEndOfArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] array = null;
        while (array == null) {
            System.out.println("Enter a list of numbers separated by commas: ");
            String input = scanner.nextLine();
            array = parseInput(input);

            if (array == null) {
                System.err.println("Invalid input. Please enter only integers separated by commas.");
            }
        }

        moveZerosToEnd(array);
        System.out.println("Modified list:");
        printArray(array);

        scanner.close();
    }

    private static int[] parseInput(String input) {
        String[] inputNumbers = input.split(",");
        int[] array = new int[inputNumbers.length];

        try {
            for (int i = 0; i < inputNumbers.length; i++) {
                array[i] = Integer.parseInt(inputNumbers[i].trim());
            }
            return array;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    private static void moveZerosToEnd(int[] array) {
        int insertPosition = 0;

        for (int num : array) {
            if (num != 0) {
                array[insertPosition++] = num;
            }
        }

        while (insertPosition < array.length) {
            array[insertPosition++] = 0;
        }
    }

    private static void printArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i]);
            if (i < array.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println();
    }
}
