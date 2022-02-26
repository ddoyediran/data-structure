// class ListNode {
//   // creating the node
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }

//   // to print all data
//   // print() {}

//   insert(data, position) {
//     let node1 = ListNode(data);

//     if (position === 1) {
//       node1.next = this.head;
//       this.head = node1;
//       return;
//     }

//     let node2 = this.head;
//     for (let i = 0; i < position - 2; i++) {
//       node2 = node2.next;
//     }

//     node1.next = node2.next;
//     node2.next = node1;
//   }

//   //   print() {
//   //     let list = new LinkedList(node1);
//   //     console.log(list.this.run());
//   //   }

//   run() {
//     this.head = null;
//     this.insert(2, 1);
//     this.insert(3, 2);
//     this.insert(4, 1);
//     this.insert(5, 2);
//     // this.print();
//   }
// }

//let list2 = LinkedList();

// let node1 = new ListNode(4); // next of node1 is null
// let node2 = new ListNode(2); // next of node2 is null

// node1.next = node2; // next of node1 will be node2

// to create a head with the LinkedList oe insert a node at the beginning of the linkList
//let list = new LinkedList(node1);

// a simple and quick test
// console.log(list.head.next.data); // print 2
// console.log(list.head.data); // print 4
// console.log(list); // print 2

// https://www.youtube.com/watch?v=ChWWEncl76Y

// doubly LinkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add to the end of the list
  append(value) {
    // check if the list is empty
    if (!this.tail) {
      this.head = this.tail = new ListNode(value);
      return;
    }

    // List is not empty
    let oldTail = this.tail;
    this.tail = new ListNode(value);
    this.tail.previous = oldTail;
    oldTail.next = this.tail;
    return;
  }

  // method to add to the front of the list
  prepend(value) {
    // check if the list is empty
    if (!this.head) {
      this.head = this.tail = new ListNode(value);
      return;
    }

    // else list is not empty
    let oldHead = this.head;
    this.head = new ListNode(value);
    this.head.next = oldHead;
    oldHead.previous = this.head;
  }

  // Method to delete the head
  deleteHead() {
    // check if list empty
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    // check if only one node in the list
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }

    this.head = this.head.next;
    this.head.previous = null;
    return;
  }

  // method to delete the tail
  deleteTail() {
    // check if list empty
    if (!this.tail) {
      console.log("No node in the list");
      return;
    }

    // else list not empty
    // check if the list has only one node
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }

    // more than one node
    this.tail = this.tail.previous;
    this.tail.next = null;
    return;
  }

  // method to search
  searchNode(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        console.log("Yes we found the value ", value, " in the List");
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    console.log("Value not present in the List");
    return;
  }
}

class ListNode {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(5);
list.prepend(8);
list.prepend(3);
list.searchNode(5);
list.deleteHead();
list.deleteTail();

console.log(list);
