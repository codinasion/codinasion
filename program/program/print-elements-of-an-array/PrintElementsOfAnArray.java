public class PrintElementsOfAnArray {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        printArrayElements(arr);
    }
    static void printArrayElements(int [] nums){
        for(int element: nums){
            System.out.print(element + " ");
        }
    }
}
