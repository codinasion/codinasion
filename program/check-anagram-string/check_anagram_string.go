package main
import (
	"fmt"
	"sort"
)
func sortString(str string) string {
	// Convert the string to a slice of runes
	runeSlice := []rune(str)

	// Sort the slice of runes
	sort.Slice(runeSlice, func(i, j int) bool {
		return runeSlice[i] < runeSlice[j]
	})

	// Convert the sorted slice of runes back to a string
	sortedString := string(runeSlice)

	return sortedString
}
func AreAnagrams(a string,b string){
	a = sortString(a)
	b = sortString(b)
	if a==b{
		fmt.Println("Anagram strings")
	} else{
		fmt.Println("Not Anagram strings")
	}
}
func main(){
	AreAnagrams("pan","nap")
}