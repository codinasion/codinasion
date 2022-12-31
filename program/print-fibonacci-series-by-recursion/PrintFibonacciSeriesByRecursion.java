public class print_fibonacci_series_by_recursion{
 
    public static void main(String args[]){
                
        int n = 5;
        for(int i=0;i<n;i++){                                     //prints the numbers  
            System.out.println(fibonacci(i) + " ");               // 0 1 1 2 3
        }
        
    }
    
    public static int fibonacci(int i){              //recursive function to get fibonacci numbers
        if(i == 0){
            return 0;
        }
        if(i == 1){
            return 1;
        }        
        return fibonacci(i - 1) + fibonacci(i - 2);
    }    
    
}
