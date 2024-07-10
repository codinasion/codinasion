
public class Adjoints {

	static void getCofactors(int A[][], int temp[][], int p, int q, int n) {
		int i = 0, j = 0;
		for (int row = 0; row < n; row++) {
			for (int col = 0; col < n; col++) {
				if (row != p && col != q) {
					temp[i][j++] = A[row][col];
					if (j == n - 1) {
						j = 0;
						i++;
					}
				}
			}
		}
	}

	static int determinant(int A[][], int n) {

		if (n == 1)
			return A[0][0];
		int N = A.length;
		int[][] tableTmp = new int[N][N];
		int D = 0;
		
		int sign = 1;
		for (int f = 0; f < n; f++) {
			getCofactors(A, tableTmp, 0, f, n);
			D += sign * A[0][f] * determinant(tableTmp, n - 1);
			sign = -1 * sign;
		}

		return D;
	}

	public static int[][] adjoint(int A[][]) {

		int N = A.length;
		int[][] adj = new int[N][N];
		if (N == 1) {
			adj[0][0] = 1;
			return adj;
		}

		int sign = 1;
		int[][] temp = new int[N][N];

		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				getCofactors(A, temp, i, j, N);

				sign = ((i + j) % 2 == 0) ? 1 : -1;

				adj[j][i] = (sign) * (determinant(temp, N - 1));
			}
		}
		return adj;
	}

}