import java.util.*;

public class FindMinimumOfNNumbers {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter number of elements in the array:");
    int n = sc.nextInt();
    int[] arr = new int[n];

    System.out.println("Enter elements of array:");
    for (int i = 0; i < n; i++) {
      arr[i] = sc.nextInt();
    }

    int mini = Integer.MAX_VALUE;
    for (int i = 0; i < n; i++) {
      if (arr[i] < mini) mini = arr[i];
    }

    System.out.println("Minimum value: " + mini);
  }
}
