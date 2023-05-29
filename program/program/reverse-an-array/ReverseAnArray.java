import java.util.Arrays;

public class ReverseAnArray {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        System.out.println(Arrays.toString(reverseArray(arr)));
    }
    public static int [] reverseArray(int [] arr){
        int [] reverseArray = new int[arr.length];
        for(int i = 0; i < arr.length; i++){
            reverseArray[i] = arr[arr.length - 1 -i];
        } return reverseArray;
    }
}
