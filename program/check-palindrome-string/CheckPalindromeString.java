import java.util.Scanner;

public class CheckPalindromeString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        if (str.equals(palinstr(str))) {
            System.out.println("Palindrome String");
        } else {
            System.out.println("Not Palindrome String");
        }
    }

    static String palinstr(String s) {
        String revStr = "";

        for (int i = s.length() - 1; i >= 0; i--) {
            revStr += s.charAt(i);
        }

        return revStr;
    }
}
