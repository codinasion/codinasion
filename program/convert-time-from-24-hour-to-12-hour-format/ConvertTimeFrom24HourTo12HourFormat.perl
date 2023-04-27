my $hour_24 =  <STDIN>; #stors
my ($hour , $minute, $second) = split(':', $hour_24);
my $time = ($hour > 11)? "PM" : "AM";
if($hour > 12)
{
    $hour = $hour - 12;
}
print "Output: ",$hour,":",$minute,":",$second,$time;