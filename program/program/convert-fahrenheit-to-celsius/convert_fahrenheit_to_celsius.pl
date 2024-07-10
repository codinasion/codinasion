print "Enter the Fahrenheit: ";
my $fahrenheit = <STDIN> ;

my $res = fahrenheitToCelsius($fahrenheit);
print "Fahrenheit to Celsius : $res";

sub fahrenheitToCelsius
{
    my ($x) = @_;
    my $res = ($fahrenheit -32) * 5/9;
    return $res ;   
}
