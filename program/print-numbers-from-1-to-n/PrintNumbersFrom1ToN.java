import java.util.Scanner;

public class PrintNumbersFrom1ToN{
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
       System.out.print("Enter the number: ");
       int n = sc.nextInt();
       print1ToN(n);
  }
  static void print1ToN(int n){
    for(int i = 1; i <=n; i++){
      System.out.print(i + " ");
    }
  }
}
