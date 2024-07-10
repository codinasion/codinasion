class PrintDiamondPattern {
  static void DiamondPattern(int n) {
    int i, j, k;
    // Print upper half of the diamond
    for (i = 0; i < n; i++) {
      for (j = 0; j < n - i; j++) {
        System.out.print(" ");
      }
      for (k = 0; k < 2 * i + 1; k++) {
        System.out.print("*");
      }
      System.out.println();
    }
    // Print lower half of the diamond
    for (i = n - 2; i >= 0; i--) {
      for (j = 0; j < n - i; j++) {
        System.out.print(" ");
      }
      for (k = 0; k < 2 * i + 1; k++) {
        System.out.print("*");
      }
      System.out.println();
    }
  }
  public static void main(String[] args) {
    DiamondPattern(5);
  }
}
