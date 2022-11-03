package main

import (
	"log"
	"sort"
)

type User struct {
	FirstName   string
	LastName    string
	PhoneNumber int
	Age         int
}

func main() {
	myMaps()
	mySlices()
}

func myMaps() {
	// Simple Map
	myMap := make(map[string]string)
	myMap["dog"] = "Liza"
	myMap["dog"] = "Liza2"
	log.Println(myMap["dog"])

	// Diff type key value map:-
	myMap2 := make(map[string]bool)
	myMap2["isGood"] = true

	// Struct Map:-
	myMap3 := make(map[string]User)

	myMap3["me"] = User{
		FirstName: "Sourav",
	}
	log.Println(myMap3["me"].FirstName)
}

func mySlices() {
	var mySlice1 []string
	mySlice1 = append(mySlice1, "Sourav1")
	mySlice1 = append(mySlice1, "Sourav2")
	mySlice1 = append(mySlice1, "Sourav3")
	log.Println(mySlice1)

	mySlice2 := []int{9, 11, 4}
	mySlice2 = append(mySlice2, 5)
	mySlice2 = append(mySlice2, 1)
	mySlice2 = append(mySlice2, 3)

	// Sorts by Value
	sort.Ints(mySlice2)
	// Sorts by index
	sort.Slice(mySlice2, func(i, j int) bool {
		if i < j {
			return true
		} else {
			return false
		}
	})
	log.Println(mySlice2)
	log.Println(mySlice2[0:2])

	var courses = []string{"reactjs", "vuejs", "python", "typescript"}
	// Removing something at any index
	const index int = 1
	courses = append(courses[:1], courses[index+1:]...)
	log.Println(courses)

}
