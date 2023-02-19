public class FindSecondLargestNumberInAnArray{

    public static void main(String[] args) {

        int[] arr =  {5,4,3,2,1};

        System.out.println(returnSecondLargest(arr));
        
    }
    public static int returnSecondLargest(int[] arr) {
        for(int i=0; i<arr.length; i++){

            int minIndex = i;

            for(int j=i+1; j<arr.length; j++){
                if(arr[i] > arr[j]){
                    minIndex = j;
                }
            }

            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        return arr[arr.length-2];
    }
}
