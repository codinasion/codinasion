void main() {
  print(convertDaysToSeconds(5));
}

int convertDaysToSeconds(int days) {
  int hours = 24, minutes = 60, seconds = 60, secondsInADay;
  secondsInADay = hours * minutes * seconds;
  return (days * secondsInADay).round();
}
