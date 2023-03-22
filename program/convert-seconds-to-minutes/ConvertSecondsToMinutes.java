import java.util.Scanner;

public class ConvertSecondsToMinutes {
	public static double secondsToMinutes(double sec) {
		return sec/60.0;
	}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of minutes: ");
        double minutes = scanner.nextDouble();
        double seconds = secondsToMinutes(minutes);
        System.out.println(minutes + " minutes is equal to " + seconds + " seconds.");
	}

}
