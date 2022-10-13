import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FindSumOfCubesOfNumbersByRecursion {

    public static void main(String[] args) {

        List<Integer> arr = new ArrayList<>(Arrays.asList(1 , 2, 3, 4, 5));   //array to get sum
        
        System.out.println(cubesum(arr,0,0));        
    }

    public static int cubesum(List<Integer> arr,int i,int sum) {                //recursive function 
        if(i >= arr.size()){
            return sum;
        }
        sum += (arr.get(i) * arr.get(i) * arr.get(i));        
        return cubesum(arr,++i,sum);        
    }
}
