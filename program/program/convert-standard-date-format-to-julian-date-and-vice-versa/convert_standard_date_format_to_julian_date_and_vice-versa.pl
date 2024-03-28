use strict;
use warnings;
use Time::Piece;

# Function to convert standard date format to Julian date
sub standard_to_julian {
    my ($date_str) = @_;
    my $date = Time::Piece->strptime($date_str, '%Y-%m-%d');
    return $date->strftime('%j');
}

# Function to convert Julian date to standard date format
sub julian_to_standard {
    my ($julian_date) = @_;
    my $year = (localtime->year) + 1900;
    my $date = Time::Piece->strptime("$year-$julian_date", '%Y-%j');
    return $date->strftime('%Y-%m-%d');
}

# Test
my $standard_date = '2024-03-27';
my $julian_date = standard_to_julian($standard_date);
print "Julian date for $standard_date: $julian_date\n";

my $converted_standard_date = julian_to_standard($julian_date);
print "Standard date for $julian_date: $converted_standard_date\n";
