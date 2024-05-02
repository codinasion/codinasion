use strict;
use warnings;

our @words = ("", "One", "Two", "Three", "Four", "Five", "Six", "Seven",
              "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
              "Fiveteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen");

our @tens = ("", "", "Twenty", "Thirty", "Forty", "Fifty",
             "Sixty", "Seventy", "Eighty", "Ninety");

our @face_val = ("Crore", "Lakh", "Thousand", "Hundred");

our @divisor = (10000000, 100000, 1000, 100, 1);

sub parse {
    my $n = shift;

    if ($n < 20) {
        print $words[$n];
    } else {
        print $tens[$n / 10], " ", $words[$n % 10];
    }
}

sub main {
    print "Enter number: ";
    my $n = <STDIN>;
    chomp($n);

    if ($n == 0) {
        print "Zero\n";
        return;
    }

    for (my $i = 0; $i < 5; $i++) {
        my $div = $divisor[$i];
        if (int($n / $div) != 0) {
            parse(int($n / $div));
            if ($i != 4) {
                print " $face_val[$i] ";
            }
        }
        $n %= $div;
    }

    print "\n";
}

main();
