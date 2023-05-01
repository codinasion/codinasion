import java.util.Scanner;

public class PrintCharacterOfAnAsciiValue {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter a value to find corresponding character");
        int number = input.nextInt();

        char asciiChar = (char)number;
        System.out.println("The character for ASCII value " + number + " is: " + asciiChar);

        input.close();
    }
  }