// Hashtable 本身就是一個 Array, 所以 constructor 中需要給訂一個 size 的參數。然後可能有多個 key 會映射到同一個 index，所以每個 index 的值也是一個 Array。

// Division Method: 
//      Index = Key mod m

// Multiplication Method:
//      Index = [m(KeyA % 1)]
//      KeyA is an irrational number
//      By moding 1, we will get a number between 0 and 1.
//      By multiplying m, we will get a number between 0 and m - 1

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = [];
        for (let i = 0; i < this.size; i++) {
            this.table.push([]);
        }
    }
    // parse string to int
    parse(str) {
        let result = 0;
        for (let i = 0; i < str.length; i++) {
            result += str.charCodeAt(i);
        }
        return result % this.size;
    }
    // Division Method
    divisionMethod(key) {
        return k % this.size;
    }
    // Multiplication Method
    multiplicationMethod(key) {
        let parsedKey = 0;
        if (typeof key !== "number") {
            parsedKey = this.parse(key);
        }
        else{
            parsedKey = key;
        }
        let a = (Math.sqrt(5) - 1) / 2;
        return Math.floor(this.size * ((parsedKey * a) % 1));
    }

    set(key, value) {
        let index = this.multiplicationMethod(key);
        this.table[index].push({ key, value });
    }

    get(key) {
        let index = this.multiplicationMethod(key);
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i].key == key) {
                return this.table[index][i];
            }
        }
        return null;
    }

    printAll() {
        console.log(this.table);
    }
}

let myHashTable = new HashTable(6);
// myHashTable.set(11424, "Mike");
// myHashTable.set(6254, "James");
// myHashTable.set(4171, "Drake");
// myHashTable.set(554, "Kevin");
myHashTable.set("white", "#FFFFFF");
myHashTable.set("magenta", "#FF00FF");
myHashTable.set("red", "#FF0000");
myHashTable.printAll();

console.log(myHashTable.get("white"));