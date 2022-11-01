package helpers

import (
	"math/rand"
	"time"
)

type SomeType struct {
	Name string
}

func RandomNum(num int) int {
	rand.Seed(time.Now().UnixNano())
	value := rand.Intn(num)
	return value
}
