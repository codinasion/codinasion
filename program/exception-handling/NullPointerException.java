class NullPointerException {
  public static void main(String args[]) {

    String str = null;

    try {
      if(str.equals("java"))
        System.out.print("Same");
      else
        System.out.print("Not Same");
    }
    catch(java.lang.NullPointerException e) {
      System.out.print("NullPointerException caught!");
    }
  }
}
