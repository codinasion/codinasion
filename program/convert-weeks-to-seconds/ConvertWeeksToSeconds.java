import java.util.Scanner;

class ConvertWeeksToSeconds {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter no of weeks: ");
    int week = input.nextInt();
    int Seconds = convertWeekToSeconds(week);
    System.out.print("Seconds: " + Seconds);
  }

  static int convertWeekToSeconds(int week) {
    return week * 7 * 24 * 60 * 60;
  }
}