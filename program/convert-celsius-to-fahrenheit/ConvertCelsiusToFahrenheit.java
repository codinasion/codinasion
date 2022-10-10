
class ConvertCelsiusToFahrenheit {
    public static void main(String[] args) {
        int celsius = 100;
        System.out.println(CelciusToFahrenheit(celsius));
    }
    
    public static int CelciusToFahrenheit(int celsius){
        return (celsius * 9/5) + 32;
    }
}
