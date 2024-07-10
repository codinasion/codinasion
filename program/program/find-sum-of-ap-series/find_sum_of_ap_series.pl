sub sumOfApSeries{
  my ($firstTerm, $commmonDifference, $nthTerm) = @_;
  my $sumOfApSeries =
    ($nthTerm / 2) * (2 * $firstTerm + ($nthTerm - 1) * $commmonDifference);
  print $sumOfApSeries;
}
sumOfApSeries(2, 3, 5);
