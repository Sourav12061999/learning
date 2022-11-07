package main

import (
	"log"
	"net/url"
)

const myURL string = "https://lco.dev/learn?category=Flutter"

func main() {
	res, err := url.Parse(myURL)
	if err != nil {
		log.Println(err)
	} else {
		log.Println(res.Scheme)
		log.Println(res.Host)
		log.Println(res.Path)
		log.Println(res.RawQuery)
		log.Println(res.Port())
		log.Println(res.Query()["category"])
	}
}
