import java.util.Scanner;
class FindRootsOfQuadraticEquation
{
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);

        double a=in.nextDouble();
        double b=in.nextDouble();
        double c=in.nextDouble();

        double param=(b*b)-(4*a*c);
        double root1=( -b+Math.sqrt(param) )/(2*a);
        double root2=(  b+Math.sqrt(param) )/(2*a);

        System.out.println(root1 +" "+root2);
        
    }
}