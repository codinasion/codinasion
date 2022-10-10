public class FindLargestSmallestNumber {

 public static void main(String[] args) {


  int numbers[] = new int[]{1,2,3,4,5};

  int smallest = numbers[0];
  int largetst = numbers[0];

  for (int i = 1; i < numbers.length; i++) {
   if (numbers[i] > largetst)
    largetst = numbers[i];
   else if (numbers[i] < smallest)
    smallest = numbers[i];
  }

  System.out.println(largetst);
  System.out.println(smallest);
 }
}

