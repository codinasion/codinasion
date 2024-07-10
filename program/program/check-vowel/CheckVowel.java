import java.util.Scanner;

public class CheckVowel {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String letter = scanner.nextLine().toLowerCase();
        isVowel(letter);
        scanner.close();
    }

    public static void isVowel(String letter) {
        String vowels = "aeiou";
        if (vowels.contains(letter))
            System.out.println("Vowel");
        else
            System.out.println("Not a Vowel");

    }
}
