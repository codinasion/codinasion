import java.util.Scanner;  

public class ConvertSecondsToDays {
	
	public static int ConvertSectoDay(int seconds) {
		return seconds / 86400;
	}
	
	
	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in); 
	    int seconds = scanner.nextInt();	 

		System.out.println(ConvertSectoDay(seconds));
	}

}
