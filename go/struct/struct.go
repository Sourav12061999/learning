package main

import (
	"fmt"
	"time"
)

type User struct {
	FirstName   string
	LastName    string
	PhoneNumber int
	Age         int
	Birthdate   time.Time
}

// Function inside struct
func (user *User) printFirstName() string {
	return user.FirstName
}

func main() {
	user := User{
		FirstName:   "Sourav",
		LastName:    "Das",
		PhoneNumber: 9831639322,
		Age:         23,
		Birthdate:   time.Now(),
	}
	fmt.Println(user.Birthdate)
	fmt.Println(user.printFirstName())
}
