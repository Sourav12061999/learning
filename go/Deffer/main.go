package main

import "log"

func main() {
	defer log.Println("b")
	defer log.Println("c")
	log.Println("a")
	defer myDiffer()
	log.Println("a")
	log.Println("a")
	log.Println("a")
}

// a,a,a,a,2,1,0,c,b

func myDiffer() {
	for i := 0; i < 3; i++ {
		defer log.Println(i)
	}
}
