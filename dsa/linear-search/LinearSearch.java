public class LinearSearch{
 
    public static void main(String args[]){
                
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int target = 5;
        System.out.println(linearSearch(arr,target));   //4
        
    }
    
    public static int linearSearch(int[] arr,int target){   //linear search function             
        int i = 0;
        while(i<arr.length){
            if(arr[i] == target){
                return i;
            }
            i++;
        }
        return -1;          //returns -1 if element not found
    }    
    
}
