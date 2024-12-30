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