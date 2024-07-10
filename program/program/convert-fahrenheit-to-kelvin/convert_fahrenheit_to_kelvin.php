<?php

declare(strict_types=1);

function fahrenheitToKelvin(int|float $fahrenheit): float {
    return round(($fahrenheit - 32) * 5/9 + 273.15, 3);
}

echo "Enter temperature in Fahrenheit: ";
$fahrenheit = (float) fgets(STDIN);
$kelvin = fahrenheitToKelvin($fahrenheit);
        
echo "The Kelvin equivalent of {$fahrenheit}°F is $kelvin K.\n";
