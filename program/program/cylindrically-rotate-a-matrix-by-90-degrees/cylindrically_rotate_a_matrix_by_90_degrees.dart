
void main() {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  final result = rotateMatrix90Degrees(matrix);
  print(result);
}

/// Rotate a matrix cylindrically by 90 degrees.
List<List<int>> rotateMatrix90Degrees(List<List<int>> matrix) {
  final List<List<int>> result = [];

  for (var i = 0; i < matrix.length; i++) {
    List<int> row = [];
    for (var j = 0; j < matrix[i].length; j++) {
      row.insert(0, matrix[j][i]);
    }
    result.add(row);
  }

  return result;
}
