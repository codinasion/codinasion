package main
import "fmt"
func findArraySum(arr []int) int{
   res := 0
   for i:=0; i<len(arr); i++ {
      res += arr[i]
   }
   return res
}

func main(){
   fmt.Println(findArraySum([]int{1, 2, 3, 4, 5}))
}
