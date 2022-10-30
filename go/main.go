package main

import (
	"fmt"
)

// Capital Latter thing are public and smaller latter things are private

func main() {
	fmt.Println("Hello World")
	var whatToSay string
	whatToSay = "Go"
	fmt.Println(whatToSay)
	var i int = 10
	fmt.Println("Hello Int:- ", i)
	var whatWasSaid = saySomething()
	fmt.Println(whatWasSaid)
	var whatWasSaidOne, whatWasSaidTwo string = saySomethingTwice()
	fmt.Println(whatWasSaidOne, whatWasSaidTwo)

}

func saySomething() string {
	return "Hello"
}

func saySomethingTwice() (string, string) {
	return "Hello", "World"
}
