import java.util.*;

public class CheckPangramString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        boolean[] mark = new boolean[26];

        for (int i = 0; i < str.length(); i++) {
            if ('A' <= str.charAt(i) && str.charAt(i) <= 'Z') {
                mark[str.charAt(i) - 'A'] = true;
            } else if ('a' <= str.charAt(i) && str.charAt(i) <= 'z') {
                mark[str.charAt(i) - 'a'] = true;
            }
        }

        for (int i = 0; i < 26; i++) {
            if (!mark[i]) {
                System.out.println("Not a pangram");
                sc.close();
                return;
            }
        }

        System.out.println("Pangram Sentence");
        sc.close();
    }
}