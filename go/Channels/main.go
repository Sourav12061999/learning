package main

import (
	"log"

	"github.com/Sourav12061999/my-app/helpers"
)

func calculate(intChan chan int) {
	RandomNum := helpers.RandomNum(10)
	intChan <- RandomNum
}
func main() {
	intChan := make(chan int)
	defer close(intChan)

	go calculate(intChan)

	num := <-intChan
	log.Println(num)
}
