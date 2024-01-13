import java.util.Scanner;
import java.util.Arrays;

public class ImplementBinarySearch {

    public static int binarysearch(int arr[],int value){

        int low = 0;
        int high = arr.length - 1;
        
        while(low <= high){
            int mid = (low+high)/2;

            if(arr[mid] == value){
                return mid;
            }
           else if(value < arr[mid]){
                high = mid - 1;
            }
            else{
                low = mid + 1;
            }

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

        int result = binarysearch(inputArray, searchValue);

        if(result != -1){
            System.out.println("Element found at index: " + result);
        }
        else{
            System.out.println("Element not found in the array.");
        }

        scanner.close();


    }   

}
