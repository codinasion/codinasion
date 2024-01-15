import java.util.*;

public class ImplementJumpSearch {

    public static int implementJumpSearch(int[] arr, int x ){

        //calculating the block size to be jumped
        double blockSize = Math.floor(Math.sqrt(arr.length));
        int prev = 0;

        // Finding the block where element could be present
        while (arr[(int) (Math.min(blockSize, arr.length) - 1)] < x) {
            prev = (int)blockSize;
            blockSize += Math.floor(Math.sqrt(arr.length));

            if (prev >= arr.length) {
                return -1; // Element Not present
            }
        }

        // Linear search within the block
        while (arr[prev] < x) {
            prev++;

            if (prev ==Math.min(blockSize, arr.length)) {
                return -1; // Element Not present
            }
        }

        // If the element is present
        if (arr[prev] == x) {
            return prev;
        }

        return -1;
    }


    public static void main(String[] args){

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the size of the array:");
        int size = scanner.nextInt();

        int[] inputArray = new int[size];

        System.out.println("Enter the elements of the array:");
        for(int i=0;i<size;i++){
            inputArray[i] = scanner.nextInt();
        }

        Arrays.sort(inputArray);

        System.out.println("Enter the value to search:");

        int searchValue = scanner.nextInt();

        int result = ImplementJumpSearch.implementJumpSearch(inputArray,searchValue);
        if(result==-1){
            System.out.println("value not present");
        }
        else{
            System.out.println("Element found at index: "+result);
        }


    }
}
