import java.util.Scanner;

public class ConvertStringToLowercase {
	
	public static String ConvertStringToLowercase(String s) {
		return s.toLowerCase();
	}

	public static void main(String[] args) {
		 Scanner scanner = new Scanner(System.in);
		 String s = scanner.nextLine();
		 System.out.println(ConvertStringToLowercase(s));
	}

}
