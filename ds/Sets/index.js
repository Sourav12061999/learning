// creating a set
const set = new Set([1,2,3]);
// adding a new element
set.add(0);
// checking if an element exists:- 
console.log(set.has(3))

// deleting an element from set
set.delete(0);
// get the size of the set
console.log("Size:- ",set.size);
for(let item of set){
    console.log(item);
}

// deleting all elements from set:- 
set.clear();
console.log(set);