// creating a new Map
// each clild array should come in pair of 2 key and value.
let map = new Map([["a",1],["b",2]]);

// adding new key value
map.set('c',3);
// Checking of a key exists
console.log(map.has("b"));
// Deleting a value:- 
map.delete("c");
// Size of the Map:- 
console.log(map.size);

// Overriding a value:- 
map.set("a",5)
// iterating over a Map:- 
for(const [key,value] of map){
    console.log(`${key}:- ${value}`);
}

// Clearing all key-value:- 
map.clear();
console.log(map);