public class FindTheAverageOfAllNumbersInAnArray {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        System.out.println(average(arr));
    }
    static int average(int [] nums){
        int sum = 0;
        for(int element: nums){
            sum += element;
        } 
      return sum/nums.length;
    }
}
