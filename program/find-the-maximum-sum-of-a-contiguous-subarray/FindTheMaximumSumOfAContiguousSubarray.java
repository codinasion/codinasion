public class FindTheMaximumSumOfAContiguousSubarray {
    public static void main(String[] args) {
        int[] numberArray = {-2, -3, 4, -1, -2, 1, 5, -3};
        System.out.println("Maximum contiguous sum is "
          + maxSubArraySum(numberArray));
      }
    
      static int maxSubArraySum(int numberArray[]) {
        int size = numberArray.length;
        int maximum_so_far = Integer.MIN_VALUE, maximum_ending_here = 0;
    
        for (int i = 0; i < size; i++) {
          maximum_ending_here = maximum_ending_here + numberArray[i];
          if (maximum_so_far < maximum_ending_here)
            maximum_so_far = maximum_ending_here;
          if (maximum_ending_here < 0)
            maximum_ending_here = 0;
        }
        return maximum_so_far;
      }
    
}
