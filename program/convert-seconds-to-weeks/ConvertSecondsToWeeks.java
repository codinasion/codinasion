import java.util.Scanner;

public class ConvertSecondsToWeeks {
	
	public static int ConvertSecondsToWeeks(int seconds) { 
		return seconds / 604800;
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int seconds = scanner.nextInt();
		System.out.println(ConvertSecondsToWeeks(seconds));

	}

}
