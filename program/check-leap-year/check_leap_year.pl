print "Enter Year: ";
$year=<STDIN>;
  if( (0 == $year % 4) && (0 != $year % 100) || (0 == $year % 400) )
    {
        print "Leap year";
    }
    else
    {
        print "Not a leap year";
    }
