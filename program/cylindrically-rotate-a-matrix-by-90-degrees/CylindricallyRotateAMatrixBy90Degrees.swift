let input = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]

func rotate90Clockwise(_ matrix: [[Int]]) -> [[Int]] {
	let N = matrix.count
	var rotated = Array(repeating: Array(repeating: 0, count: N), count: N)
	for r in 0 ..< N {
		for c in 0 ..< N {
			rotated[c][N - (r + 1)] = matrix[r][c]
		}
	}
	return rotated
}

func printMatrix(_ matrix: [[Int]]) {
	for r in 0 ..< matrix.count {
		for c in 0 ..< matrix.count {
			print(matrix[r][c], terminator: " ")
		}
		print()
	}
	print()
}

print("Input  :")
printMatrix(input)
print("Output  :")
printMatrix(rotate90Clockwise(input))