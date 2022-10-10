import java.util.Scanner;

public class StringToLowercase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your String to convert it into Lowercase: ");
        String input = sc.nextLine();
        System.out.println("Input: " + input);

        String output1 = input.toLowerCase();
        String output2 = convertToLowercase(input);

        System.out.println("1. Output: " + output1);
        System.out.println("2. Output: " + output2);

    }

    private static String convertToLowercase(String input) {
        char[] ch = input.toCharArray();

        for (int i = 0; i < ch.length; i++) {
            if (ch[i] >= 65 && ch[i] <= 90)
                ch[i] += 32;
        }

        return new String(ch);
    }
}
