import java.util.Scanner;
public class ConvertStringToTitlecase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine(); //Getting user input

        String[] words = input.split(" "); //Will split words based on space
        StringBuilder sb = new StringBuilder();
        for (String word : words) {
            sb.append(Character.toUpperCase(word.charAt(0)));
            sb.append(word.substring(1).toLowerCase());
            sb.append(" ");
        }

        String output = sb.toString().trim();
        System.out.println(output);
    }
}