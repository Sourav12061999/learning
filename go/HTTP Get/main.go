package main

import (
	"io"
	"log"
	"net/http"
	"net/url"
	"strings"
)

func main() {
	getRequest()
	postRequest()
	postFormRequest()

}

func getRequest() {
	const url string = "https://lco.dev"
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
func postRequest() {
	const url string = `https://reqres.in/api/login`

	requestBody := strings.NewReader(`
	  {
		  "email":"eve.holt@reqres.in",
		  "password":"cityslicka"
	  }
	`)

	res, err := http.Post(url, "application/json", requestBody)

	if err != nil {
		log.Println(err)
	} else {
		content, _ := io.ReadAll(res.Body)
		log.Println(string(content))
	}
	defer res.Body.Close()
}
func postFormRequest() {
	const myUrl string = `https://reqres.in/api/login`

	data := url.Values{}

	data.Add("email", "eve.holt@reqres.in")
	data.Add("password", "cityslicka")

	res, err := http.PostForm(myUrl, data)

	if err != nil {
		log.Println(err)
	} else {
		content, _ := io.ReadAll(res.Body)
		log.Println(string(content))
	}
	defer res.Body.Close()
}
