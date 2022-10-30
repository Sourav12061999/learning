package pointers

import (
	"fmt"
)

func main() {
	var whatToSay string = "Go"
	var ponterToWhatToSay *string = &whatToSay
	strPointer(ponterToWhatToSay)
	strPointer(&whatToSay)
}

func strPointer(str *string) {
	*str = "New Val"
	fmt.Println("Pointer:- ", *str)
	fmt.Println("Pointer:- ", str)
}
