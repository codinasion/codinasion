import java.util.Scanner;
import java.util.Arrays;

public class CheckAnagramString {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        // Get the strings from the user
        System.out.print("Enter the first word: ");
        String word1 = scan.next();

        System.out.print("Enter the second word: ");
        String word2 = scan.next();

        // Check if the strings are anagrams and print a message to user
        if(isAnagram(word1, word2)) {
            System.out.println("The words are anagrams.");
        }
        else {
            System.out.println("The words are not anagrams.");
        }

        scan.close();
    }

    /**
     * Checks if two strings are anagrams
     * @param word1 String
     * @param word2 String
     * @return Boolean
     */
    public static boolean isAnagram(String word1, String word2) {
        // Convert both strings to lowercase
        word1 = word1.toLowerCase();
        word2 = word2.toLowerCase();

        // Remove all non-alphabetic characters
        word1 = word1.replaceAll("[^a-z]", "");
        word2 = word2.replaceAll("[^a-z]", "");

        // If the strings have not the same length, there are not anagrams
        if(word1.length() != word2.length()) {
            return false;
        }

        // Sort both strings
        char[] charArray1 = word1.toCharArray();
        char[] charArray2 = word2.toCharArray();
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);

        // Compare the sorted strings. If there are equal, the strings are anagrams.
        return Arrays.equals(charArray1, charArray2);
    }
}
