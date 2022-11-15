package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
)

type Course struct {
	ID          string  `json:"_id"`
	CourseName  string  `json:"coursename"`
	CoursePrice int     `json:"courseprice"`
	Author      *Author `json:"author"`
}

type Author struct {
	FullName string `json:"fullname"`
	Website  string `json:"website"`
}

var Courses []Course

func (c *Course) IsEmpty() bool {
	return c.ID == ""
}
func main() {
	router := mux.NewRouter()
	Courses = append(Courses, Course{
		ID:          "2",
		CourseName:  "React.js",
		CoursePrice: 200,
		Author: &Author{
			FullName: "Sourav Das",
			Website:  "https://link.com",
		},
	})

	// Router:-

	router.HandleFunc("/", serverHome).Methods("GET")
	router.HandleFunc("/courses", getAllCourses).Methods("GET")
	router.HandleFunc("/course/{id}", getOneCourses).Methods("GET")
	router.HandleFunc("/course", createOneCourses).Methods("POST")
	router.HandleFunc("/course/{id}", updateCourse).Methods("PUT")
	router.HandleFunc("/course/{id}", deleteCourse).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":4000", router))
}

func serverHome(writer http.ResponseWriter, reader *http.Request) {
	writer.Write([]byte("<h1>Welcome to API by Go</h1>"))
}

func getAllCourses(writer http.ResponseWriter, reader *http.Request) {
	writer.Header().Set("Content-Type", "application/json")
	json.NewEncoder(writer).Encode(Courses)

}

func getOneCourses(writer http.ResponseWriter, reader *http.Request) {
	writer.Header().Set("Content-Type", "application/json")
	// Grab id from request
	params := mux.Vars(reader)
	fmt.Printf(params["%v"])

	for _, course := range Courses {
		if course.ID == params["id"] {
			json.NewEncoder(writer).Encode(course)
			return
		}
	}
	json.NewEncoder(writer).Encode("No Course Found")
}

func createOneCourses(writer http.ResponseWriter, reader *http.Request) {
	writer.Header().Set("Content-Type", "application/json")
	// What if the Body is Empty:-
	if reader.Body == nil {
		json.NewEncoder(writer).Encode("No Course Data Has Been Passed")
		return
	}

	// What if the data is {}
	var course Course
	_ = json.NewDecoder(reader.Body).Decode(&course)

	if course.IsEmpty() {
		json.NewEncoder(writer).Encode("No Course Data Has Been Passed")
		return
	}

	// Generate a unique id -> string
	// append course into Courses

	rand.Seed(time.Now().UnixNano())
	course.ID = strconv.Itoa(rand.Intn(100))

	Courses = append(Courses, course)
	json.NewEncoder(writer).Encode(course)

}

func updateCourse(writer http.ResponseWriter, reader *http.Request) {
	writer.Header().Set("Content-Type", "application/json")

	params := mux.Vars(reader)

	for index, course := range Courses {
		if course.ID == params["id"] {
			var course Course
			Courses = append(Courses[:index], Courses[index+1:]...)
			_ = json.NewDecoder(reader.Body).Decode(&course)

			course.ID = params["id"]
			Courses = append(Courses, course)
			json.NewEncoder(writer).Encode(course)
			return
		}
	}

}

func deleteCourse(writer http.ResponseWriter, reader *http.Request) {
	writer.Header().Set("Content-Type", "application/json")

	params := mux.Vars(reader)

	for index, course := range Courses {
		if course.ID == params["id"] {
			Courses = append(Courses[:index], Courses[index+1:]...)
			json.NewEncoder(writer).Encode(`course has been deleted`)
			return
		}
	}

}
