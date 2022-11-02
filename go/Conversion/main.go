package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	fmt.Println("Please Rate our app:- ")

	reader := bufio.NewReader(os.Stdin)

	input, err := reader.ReadString('\n')

	input = strings.TrimSpace(input)

	fmt.Println("Thanks for ", input, " rating")
	fmt.Println(err)

	numRating, err2 := strconv.ParseFloat(input, 64)

	if err2 != nil {
		fmt.Println(err2)
	} else {
		fmt.Println(numRating + 1)
	}
}
