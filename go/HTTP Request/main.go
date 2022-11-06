package main

import (
	"io"
	"log"
	"net/http"
)

const url string = "https://lco.dev"

func main() {
	response, err := http.Get(url)

	if err != nil {
		log.Println(err)
	} else {
		log.Println(response)
		dataByte, err2 := io.ReadAll(response.Body)
		if err2 != nil {
			log.Println(err2)
		} else {
			log.Println(string(dataByte))
		}
	}

	defer response.Body.Close()
}
