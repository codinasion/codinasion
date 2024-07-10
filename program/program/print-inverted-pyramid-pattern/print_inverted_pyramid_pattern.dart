void main() {
  int n = 5;
  for (int i = n; i >= 1; i--) {
    final list = [];
    for (int j = 1; j <= i; j++) {
      list.add(j);
    }
    print(list.join(' '));
  }
}
