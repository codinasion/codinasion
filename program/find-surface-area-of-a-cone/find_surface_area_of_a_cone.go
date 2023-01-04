package main

import(
	"fmt"
	"math"
)

func main(){
	fmt.Printf("Enter the radius:")
	var radius float64
	fmt.Scanf("%f",&radius)
	fmt.Printf("Enter the Slant Height:")
        var sh float64
        fmt.Scanf("%f",&sh)
	Sarea:=math.Pi*radius*(radius+sh)
	fmt.Printf("Surface Area of Cone:%.1f\n",Sarea)
	
}

