// Implmenting Stack

// using an array Implmentation
let max_size = 10;
let anArray = [];
anArray.length = max_size;

let top = -1; // when stack is empty

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

const isEmpty = () => {
  if (top === -1) {
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

// both takes constant time O(1)

run();
