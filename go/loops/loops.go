package main

import "log"

func main() {
	for i := 0; i <= 10; i++ {
		log.Println(i)
	}

	animals := []string{"dog", "cat"}
	for i, animal := range animals {
		log.Println(i, " ", animal)
	}

	animals2 := make(map[string]string)
	animals2["dog"] = "Liza"

	// Looping over maps. This _ thing can be done on array as well
	for _, animal := range animals2 {
		log.Println(animal)
	}

	for animal, pet_name := range animals2 {
		log.Println(animal, " ", pet_name)
	}

	var sentence string = "I am a good boy"

	for i, letter := range sentence {
		log.Println(i, " ", letter)
	}
}

// Looping over structs is not possible
