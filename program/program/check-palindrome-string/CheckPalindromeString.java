import java.util.Scanner;

public class CheckPalindromeString {
	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		String str = sc.next();
		int i = 0;
		int j = str.length() - 1;
		boolean check = true;
		sc.close();
		while (i <= j) {
			if (str.charAt(i) != str.charAt(j)) {
				check = false;
				break;
			}
			i++;
			j--;
		}
		System.out.println((check) ? "Palindrome String" : "Not Palindrome String");
	}
}
