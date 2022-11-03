package main

import (
	"log"
	"time"
)

func main() {
	// Getting the current time
	presentTime := time.Now()
	log.Println(presentTime)
	log.Println(presentTime.Format("01-02-2006"))
	log.Println(presentTime.Format("01-02-2006 15:04:05 Monday"))

	// Creating time from manual entry
	createdDate := time.Date(2020, time.June, 12, 23, 23, 0, 0, time.UTC)
	log.Println(createdDate)
	log.Println(createdDate.Format("01-02-2006 15:04:05 Monday"))
}
