sub sumOfNumbersByRecursion {
  my ($num) = @_;
  $sum = 0;
  if ($num > 0) {
    $sum = ($num % 10) + sumOfNumbersByRecursion(($num / 10));
  }
  return $sum;
}

print sumOfNumbersByRecursion(12345);
