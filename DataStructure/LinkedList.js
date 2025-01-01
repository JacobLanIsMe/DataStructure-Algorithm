// Advantages:
// 1. Elements can be inserted into linked lists indefinitely, while an array will eventually either fill up or need to be resized.
// 2. Very fast insertion and deletion compared to Array.

// Disadvantages:
// 1. They use more memory than arrays because of the storage used by their pointers.
// 2. Nodes in a linked list must be read in order from the beginning as linked lists are inherently sequential access.
// 3. Nodes are stored noncontiquous, greatly increasing the time periods required to access individual elements within the list, especially with a CPU cache.
// 4. Difficulties arise in linked lists when it comes to reverse traversing. For instance, single-linked lists are cumbersome to navigate backward and while doubly linked lists are somewhat easier to read, memory is consumed in allocating space for a back-pointer.

// Difference between Array and Linked List
// Linked List:
// 1. Do not have indices.
// 2. Connection between nodes are a "next" pointer.
// 3. Random access is not allowed (Must go throught each item before accessing). => 無法直接取得某個 index 的值。
// Array:
// Items are indexed in order.
// Insertion and deletion are expensive.
// Elements can quickly be accessed with a specific index.

// Big O of Array and Linked List
//                                           Array     Linked List
// Accessing Elements                         O(1)        O(n)
// Insert and Remove from the Beginning       O(n)        O(1)
// Insert and Remove from the End             O(1)        O(n)
// Insert and Remove from the Middle          O(n)        O(n)



class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let currentNode = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length++;
    }

    pop() {
        if (this.head === null) {
            return null;
        }
        else if (this.length === 1) {
            let temp = this.head;
            this.head = null;
            this.length = 0;
            return temp;
        }
        else {
            let currentNode = this.head;
            for (let i = 1; i <= this.length - 2; i++) {
                currentNode = currentNode.next;
            }
            let temp = currentNode.next;
            currentNode.next = null;
            this.length--;
            return temp;
        }

    }

    shift() {
        if (this.head === null) {
            return null;
        }
        else if (this.length === 1) {
            let temp = this.head;
            this.head = null;
            this.length = 0;
            return temp;
        }
        else {
            let temp = this.head;
            this.head = this.head.next;
            this.length--;
            return temp;
        }
    }

    unshift(value) {
        let temp = this.head;
        this.head = new Node(value);
        this.head.next = temp;
        this.length++;
    }

    insertAt(index, value) {
        if (index > this.length || index < 0) {
            return null;
        }
        else if (index === 0) {
            this.unshift(value);
        }
        else if (index === this.length) {
            this.push(value);
        }
        else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            let newNode = new Node(value);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            this.length++;
        }
    }

    removeAt(index) {
        if (index >= this.length || index < 0) {
            return null;
        }
        else if (index === 0) {
            return this.shift();
        }
        else if (index === this.length - 1) {
            return this.pop();
        }
        else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            let temp = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.length--;
            return temp;
        }
    }

    get(index) {
        if (this.head === null || index >= this.length || index < 0) {
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }

    printAll() {
        if (this.length == 0) {
            console.log("Nothing in this List")
            return;
        }
        let currentNode = this.head;
        while (currentNode != null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

let myLinkedList = new LinkedList();
myLinkedList.push("Mike");
myLinkedList.push("Harry");
myLinkedList.push("James");
myLinkedList.push("Kevin");
myLinkedList.printAll();
myLinkedList.pop();
myLinkedList.shift();
myLinkedList.unshift("Jake");
myLinkedList.insertAt(1, "Jacob");
myLinkedList.removeAt(2);
console.log(myLinkedList.get(1));
myLinkedList.printAll();