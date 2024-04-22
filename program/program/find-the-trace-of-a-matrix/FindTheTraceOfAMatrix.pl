
use strict;
use warnings;

sub main {
  my ($rows, $columns);

  print "Enter Matrix Rows and Columns: ";
  chomp($rows = <STDIN>);  # Read input with chomp to remove newline
  chomp($columns = <STDIN>);

  die "Matrix must be square!" unless $rows == $columns;

  my @Tra_arr;
  print "Please Enter the Matrix Items:\n";

  for (my $i = 0; $i < $rows; $i++) {
    my @row;
    for (my $j = 0; $j < $columns; $j++) {
      chomp($row[$j] = <STDIN>);  # Read element with chomp
    }
    push @Tra_arr, \@row;  # Add row as an array reference
  }

  my $trace = 0;
  for (my $i = 0; $i < $rows; $i++) {
    $trace += $Tra_arr[$i][$i];  # Access diagonal elements
  }

  print "The Trace Of the Matrix = $trace\n";
}

main();
