package main
import "fmt"

func findRank(matrix [][]float64) int {
    rows,cols := len(matrix),len(matrix[0])
    rank := cols
      for i := 0; i< rows ; i ++ {
          for j := i+1; j < cols; j ++ {
              if i != j {
                  ratio :=  matrix[j][i]/matrix[i][i]
                  for k:=i ; k< cols; k++ {
                      matrix[j][k] -= ratio*matrix[i][k]
                  }
              }
          }
      }
      for i := 0; i< rows ; i ++ {
          if matrix [i][i] == 0 {
              rank--
            }
        } 
    return rank
}
func main() {
    matrix := [][] float64 {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
    rank := findRank(matrix)
    fmt.Println("Output : ", rank)
}