// Implmenting Stack

/** 
// both takes constant time O(1)
// using an array Implmentation
let max_size = 10;
let anArray = [];
anArray.length = max_size;

let top = -1; // when stack is empty

// method to delete the top value in the stack
// INPUT: takes no argument
// OUPUT: changed the top position to the index before it.
const push = (x) => {
  // if stack overflow occurs
  if (top === max_size - 1) {
    console.log("Error: Stack overflow");
    return;
  }
  top = top + 1;
  anArray[top] = x;
};

const pop = () => {
  // to check if anArray is empty
  if (top === -1) {
    console.log("Error: No element to pop");
    return;
  }
  top = top - 1;
};

const topElement = () => {
  return anArray[top];
};

// method to check if stack is emptu
// INPUT: takes no argument
// OUPUT: return true if it is, false if otherwise.
const isEmpty = () => {
  if (top === -1) {
    // console.log("Stack is empty and has no element");
    return true;
  }

  return false;
};

const print = () => {
  console.log("Stack: ");
  for (let i = 0; i <= top; i++) {
    console.log("%d ", anArray[i]);
  }
  console.log("\n");
};

const run = () => {
  push(2);
  print();
  push(5);
  print();
  push(10);
  print();
  pop();
  print();
  push(12);
  print();
};

run();

*/

// using class implmentation.
class Stack {
  constructor(max_size = 10, anArray = [], top = -1) {
    this.max_size = max_size;
    this.anArray = new Array(max_size);
    this.top = top;
  }

  //anArray.length = this.max_size;

  // method to add an element to the top od the stack
  // INPUT: takes a single argument
  // OUPUT: no output but add element to the top od the stack.
  push(x) {
    // check if stack is overflow
    if (this.top === this.max_size - 1) {
      console.log("Stack is overflow");
      return;
    }
    this.top++;
    this.anArray[this.top] = x;
  }

  // method to delete the top value in the stack
  // INPUT: takes no argument
  // OUPUT: changed the top position to the index before it.
  pop() {
    // check if stack is empty
    if (this.top === -1) {
      console.log("The Stack is empty and there is nothing to delete");
      return;
    }

    this.top--;
  }

  // method to get the top element in the stack
  // INPUT: takes no argument
  // OUPUT: print the top element in the stack.
  topElement() {
    if (this.isEmpty()) {
      console.log("Stack is empty and has no element");
      return;
    }

    return this.anArray[this.top];
  }

  // method to check if stack is empty
  // INPUT: takes no argument
  // OUPUT: return true if it is, false if otherwise.
  isEmpty() {
    if (this.top === -1) {
      return true;
    }

    return false;
  }

  // method to check if stack is empty
  // INPUT: takes no argument
  // OUPUT: prints result to console.
  print() {
    console.log("Stack: ");
    for (let i = 0; i <= this.top; i++) {
      console.log("%d ", this.anArray[i]);
    }
    console.log("\n");
  }

  // method to push & pop to the stack, also print what is in the stack.
  // INPUT: takes no argument
  // OUPUT: .
  run() {
    this.push(2);
    this.print();
    this.push(5);
    this.print();
    this.push(10);
    this.print();
    this.pop();
    this.print();
    this.push(12);
    this.print();
  }
}

let stack = new Stack();

stack.run();
