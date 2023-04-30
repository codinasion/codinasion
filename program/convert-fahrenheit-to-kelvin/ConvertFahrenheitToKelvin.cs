class Program {
    static double convertFK(double f) {
        double celc = (f - 32) * (5/9);
        return celc + 273;
    }
    
    public static void main(string[] args) {
        Console.WriteLine("Enter temp :");
        double temp = Console.ReadLine();
        Console.WriteLine(convertFK(temp) + " degrees Kelvin");
    }
}