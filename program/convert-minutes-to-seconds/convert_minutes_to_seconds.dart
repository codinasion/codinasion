void main() {
  print(convertMinutesToSeconds());
}

int convertMinutesToSeconds({int days = 5}) {
  int secondsInMinute = 60;
  return secondsInMinute * days;
}
