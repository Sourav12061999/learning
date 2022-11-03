package main

import "fmt"

func main() {
	var fruitList [5]string

	fruitList[0] = "Apple"
	fruitList[1] = "Mango"
	fruitList[3] = "Grape"

	fmt.Println(fruitList)
	fmt.Println(len(fruitList))
}
