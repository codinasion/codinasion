import java.util.Scanner;
class ConvertMinutes2Days {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter minutes: ");
    int minutes = input.nextInt();
    input.close();
    int days = minutes/1440;
    System.out.print("No of days: " + days);
  }
}
