print "Enter the hours: ";
my $hours = <STDIN> ;

my $res = hoursToMinutes($hours);
print "$hours hours is $res minutes";

sub hoursToMinutes
{
    my ($x) = @_;
    my $res = $hours * 60;
    return $res ;   
}
