import java.util.Scanner;

class ConvertWeeksToMinutes {
    public static void main(String[] args) {
        
		Scanner input = new Scanner(System.in);
		
		System.out.print("Enter no of weeks: ");
		int week = input.nextInt();
		
		int minute = convertIntoMinute(week);
		
		System.out.print("There are " + minute + " minutes in " + week + " weeks.");
    }
    		
	
	static int convertIntoMinute( int week) {
		
		return week * 7 * 24 * 60;
	}
}