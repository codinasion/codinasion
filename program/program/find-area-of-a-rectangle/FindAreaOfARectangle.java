import java.util.Scanner;;

public class FindAreaOfARectangle {
    public static void main(String args[]){
        
        Scanner sc = new Scanner(System.in);
        int length, width, area;
        System.out.println("Enter length");
        length = sc.nextInt();
        System.out.println("Enter width");
        width = sc.nextInt();

        area = length * width;
        System.out.println(area);
        sc.close();
        
    }
}
