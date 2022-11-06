package main

import (
	"io"
	"io/ioutil"
	"log"
	"os"
)

func main() {
	WriteFile()
	ReadFile("./myIntro.txt")
}

func WriteFile() {
	content := "I am Sourav"
	file, err := os.Create("./myIntro.txt")

	if err != nil {
		log.Println(err)
	} else {
		data, err := io.WriteString(file, content)
		if err != nil {
			log.Println(err)
		} else {
			log.Println(data)
		}
	}
	defer file.Close()
}

func ReadFile(fileName string) {
	dataInByte, err := ioutil.ReadFile(fileName)
	if err != nil {
		log.Println(err)
	} else {
		log.Println(dataInByte)
		log.Println(string(dataInByte))
	}
}
