import java.util.Scanner;

public class CheckLeapYear {

  public static void main(String[] args) {
    System.out.print("Enter year : ");
    Scanner sc = new Scanner(System.in);
    int year = sc.nextInt();
    sc.close();

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      System.out.println(year + " is a leap year.");
    } else {
      System.out.println(year + " is not a leap year.");
    }
  }
}
