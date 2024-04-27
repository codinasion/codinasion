print "Enter a number: ";
$number = <STDIN>;
chomp($number);

$limitNumber = $number;

for ($i = 1; $i <= $number; $i++) {
    for ($j = 1; $j <= $limitNumber; $j++) {
        print "$j ";
    }
    print "\n";
    $limitNumber--;
}
