class replaceSpace
{
	static String replaceSpace(String str)
	{
		String s = "";
		for (int i = 0; i < str.length(); ++i) {
			if (str.charAt(i) == ' ')
				s += '/';
			else
				s += str.charAt(i);
		}
		return s;
	}
	public static void main(String []args)
	{
	    Scanner sc= new Scanner(System.in);
        System.out.print("Enter a string: ");  
        String str= sc.nextLine();   
		System.out.println(replaceSpace(str));
	}
}
