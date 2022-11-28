public class CalculateThePermutationsOfNObjectsTakenAtTime {

  public static void main(String[] args) {
    if(args.length == 2) {
      int n = 0;
      int r = 0;
      try {
        n = Integer.parseInt(args[0]);
        r = Integer.parseInt(args[1]);
      } catch(Exception error){
        throw new IllegalArgumentException("Error parsing arguments: "+args.toString());
      }
      System.out.println(permutations(n, r));
    }
    else {
      throw new IllegalArgumentException(
        "Expected two arguments, received " + args.length + " arguments"
      ) ;
    }
  }

  public static int factorial(int num) {
      if (num == 0) return 1;
      return num * factorial(num - 1);
  }

  public static int permutations(int total, int sample) {
    try {
      return factorial(total)/factorial(total-sample);
    }
    catch(Exception error){
      throw error;
    }
  }
}
