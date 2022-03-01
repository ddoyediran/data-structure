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

// New approach
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // helper method to add node to the tail of the list
  // INPUT: Takes only one parameter
  // RETURNS: prints nothings
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

  // helper method to add node to the head of the list
  // INPUT: Takes only one parameter
  // RETURNS: prints nothings
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
    return;
  }

  // helper method to delete the node at the head of the list
  // INPUT: Takes no parameter
  // RETURNS: prints to console when operation is performed
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

  // helper method to delete the node in the tail of the list
  // INPUT: Takes no parameter
  // RETURNS: prints to console when operation is performed
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

  // Method: helper method to search if the list contain a value
  // INPUT: Takes one parameter
  // RETURNS: returns the node if found and print to console if not found.
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

  // method to add data at nth node of a link list
  // INPUT: takes 2 parameter data and position
  //
  insert(value, position) {
    // position < 1, no point to add the value
    if (position < 1) {
      console.log("we cannot add to position less than 1");
      return;
    } else {
      // position >= 1
      // check if list is empty
      if (!this.head) {
        if (position === 1) {
          this.head = this.tail = new ListNode(value);
          return;
        }

        if (position < 1 || position > 1) {
          console.log("We cannot insert if position is not 1");
          return;
        }
      }

      let currentNode = this.head;
      let counter = 1;
      // let nextNode

      while (currentNode) {
        console.log("CurrN: ", currentNode);
        if (counter === position) {
          console.log("count & point 2: ", counter, position);
          let nextNode = currentNode;
          let previousNode = currentNode.previous;
          currentNode = new ListNode(value); // bug here now working properly
          currentNode.previous = previousNode;
          currentNode.next = nextNode;
          return;
        }

        currentNode = currentNode.next;
        counter++;
      }

      console.log("Position don't exit");
      return;
    }
  }
  // check if the list is empty: then add or return an error accordingly - no need to traverse
  // else:
  // check if it has only one node: check if the position is 1 then prepend or if the position is 2 then append.
  // more than one node
  // trasverse to the position - 1
  // add the new data
  // point the previous to position - 1
  // point the next of the data to position + 1
}

class ListNode {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

// Time to test

let list = new LinkedList();

list.append(1);
list.append(2);
//list.append(5);
//list.prepend(8);
// list.prepend(3);
// list.searchNode(5);
// list.deleteHead();
// list.deleteTail();

list.insert(4, 1);

console.log(list);

// Learning Resources you might find useful
// Mycodeschool - http://www.youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P
// https://www.youtube.com/watch?v=ChWWEncl76Y
