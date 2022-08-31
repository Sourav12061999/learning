class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key = "") {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    //   this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      bucket = [[key, value]];
    } else {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) sameKey[1] = value;
      else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (!bucket) return undefined;

    const sameKey = bucket.find((item) => item[0] === key);
    if (sameKey) return sameKey[1];
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i] !== undefined) {
        console.log(this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.set("name", "Bruce");
table.set("supp_name", "Hulk");
table.display();
