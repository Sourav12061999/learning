package main

import (
	"encoding/json"
	"fmt"
	"log"
)

type Person struct {
	MyName string `json:"name"`
	IsGood bool   `json:"isGood"`
}

func main() {

	// This is Reading JSON into a struct
	myJson := `
     [
		 {
			 "name":"Sourav Das",
			 "isGood": true
		 },
		 {
			"name":"Sourav Das2",
			"isGood": false
		}
	 ]  
   `

	var me []Person

	err := json.Unmarshal([]byte(myJson), &me)

	if err == nil {
		log.Println("All Ok")
	} else {
		log.Println(err)
	}

	log.Printf("JSON:- %v", me)

	// Writting JSON from a struct
	var mine []Person
	mine = append(mine, Person{
		MyName: "Who",
		IsGood: true,
	})

	mine = append(mine, Person{
		MyName: "Who2",
		IsGood: false,
	})

	newJson, err2 := json.MarshalIndent(mine, "", "    ")

	if err2 == nil {
		log.Println("Some Error:- ", err2)
	}

	fmt.Println(string(newJson))
}
