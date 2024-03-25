sub celsius_to_kelvin {
    my ($celsius) = @_;
    my $kelvin = $celsius + 273.15;
    return $kelvin;
}

my $celsius_temperature = -40; 
my $kelvin_temperature = celsius_to_kelvin($celsius_temperature);
print "$celsius_temperature degrees Celsius is equal to $kelvin_temperature Kelvin.\n";
