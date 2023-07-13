void main() {
  dynamic a = 1;
  print(a is int
      ? "Integer"
      : a is double
          ? "Float"
          : "Unknown");
}
