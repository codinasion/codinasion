import java.util.Scanner;

public class ConvertStringToCamelCase {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input: ");
        String input = scanner.nextLine();
        String[] inputArray = input.split(" ");
        StringBuilder output = new StringBuilder();
        for(int i = 0; i < inputArray.length; i++) {
            if(i == 0) {
                output.append(inputArray[i]);
            } else {
                output.append(String.valueOf(inputArray[i].charAt(0)).toUpperCase()).append(inputArray[i].substring(1));
            }
        }
        System.out.println("Output: " + output);
    }
}