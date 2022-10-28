import java.util.Scanner;
class ConvertMinutes2Days {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.println("Enter minutes: ");
    int minutes = input.nextInt();
    int days = minutes/1440;
    System.out.println("No of days: "+days);
  }
}
