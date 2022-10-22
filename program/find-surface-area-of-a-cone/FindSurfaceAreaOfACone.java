import java.util.*;
class FindSurfaceAreaOfACone {
    public static void main(String[] args) {
     Scanner sc = new Scanner(System.in);
     System.out.print("Enter radius of the cone: ");
     Double radius = sc.nextDouble();
     System.out.print("Enter slant height of the cone: ");
     Double slantHeight = sc.nextDouble();
     sc.close();
     Double area = Math.PI*radius*(radius + slantHeight);
     System.out.println("Area of a cone is "+area);    
    }
}
