import java.util.Scanner;

public class ConvertStringToPascalcase {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("saisir le mot ou la phrase : ");
        String a = sc.nextLine();
        System.out.println("Résultat : " + toTitleCase(a));
    }

    public static String toTitleCase(String input) {
        StringBuilder titleCase = new StringBuilder(input.length());
        boolean nextTitleCase = true;

        for (char c : input.toCharArray()) {
            if (Character.isSpaceChar(c)) {
                nextTitleCase = true;
            } else if (nextTitleCase) {
                c = Character.toTitleCase(c);
                nextTitleCase = false;
            }

            titleCase.append(c);
        }

        return titleCase.toString().replaceAll("\\s", "");
    }

}
