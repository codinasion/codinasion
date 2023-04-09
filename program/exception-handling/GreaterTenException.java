import java.util.Scanner;

class GreaterTenException extends Exception {
  GreaterTenException() {
    super("The number is greater than 10");
  }
  GreaterTenException(String message) {
    super(message);
  }
}

class Number {
  public static void main(String args[]) throws GreaterTenException {
    Scanner in = new Scanner(System.in);
    System.out.print("Enter a number: ");
    int num = in.nextInt();

    try {
      if(num > 10) {
        throw new GreaterTenException();
      }
      else if(num == 10) {
        System.out.println("The number is 10");
      }
      else {
        System.out.println("The number is less than 10");
      }
    }
    catch(GreaterTenException e) {
      e.printStackTrace();
    }
  }
}
