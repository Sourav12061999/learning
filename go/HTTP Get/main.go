package main

import (
	"io"
	"log"
	"net/http"
	"strings"
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
			var resStr strings.Builder
			byteCount, _ := resStr.Write(dataByte)
			log.Println(byteCount)
			log.Println(resStr.String())
		}
	}

	defer response.Body.Close()
}
