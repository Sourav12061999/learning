package main

import "log"

type Animal interface {
	Says() string
	NumOfLegs() int
}

type Dog struct {
	Name  string
	Breed string
}

type Tiger struct {
	Name      string
	isViolent bool
}

func main() {
	dog := Dog{
		Name:  "Liza",
		Breed: "Puppy",
	}
	PrintInfo(&dog)
}

func PrintInfo(animal Animal) {
	log.Println("This Animal Says:- ", animal.Says(), " ,This animal has ", animal.NumOfLegs(), " legs")
}

func (dog *Dog) Says() string {
	return "Woof"
}

func (dog *Dog) NumOfLegs() int {
	return 4
}
