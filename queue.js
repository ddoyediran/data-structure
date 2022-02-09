// Implmenting Queue Data Type
/**
 * 1. Using Array Pmplementation
 * 2. Using Linked list
 *
 * Queues contain 4 operations:
 * a.) Enqueue: Add element at the rear of queue. Also known as push
 * b.) Dequeue: deleting element at the front of the queue. Also known as pop
 * c.) Front: Checks which element is at the front of the queue.
 * d.) isEmpty: Checks if the queue is empty.
 */

// Using Array based implementation

class Queue {
  constructor(max_Size = 10) {
    this.front = -1;
    this.rear = -1;
    this.max_Size = max_Size;
    this.array = new Array(this.max_Size);
  }

  // method to check if the array is empty
  // INPUT: takes no parameter.
  // OUTPUT: returns boolean of true if it is empty and false is it not.
  isEmpty() {
    if (this.front === -1 && this.rear === -1) {
      return true;
    }
    return false;
  }

  // method to check if the array is full
  // INPUT: takes no parameter.
  // OUTPUT: returns boolean true if it is and false if it not full.
  isFull() {
    if ((this.rear + 1) % this.max_Size === this.front) {
      // using th concept of circular array
      return true;
    }
    // if (this.rear === max_Size - 1) {
    //   return true;
    // }

    return false;
  }

  // method to add element to the rear of the array
  // INPUT: take only one parameter, which is the element to be added
  // OUPUT: has no return value.
  enqueue(element) {
    if (this.isFull()) {
      console.log("We cannot add element to the Queue cos it is full");
      return;
    }

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
      this.array[this.rear] = element;
      return;
    }
    this.rear = (this.rear + 1) % this.max_Size;
    this.array[this.rear] = element;
    return;
  }

  // method to remove element from the front of the array
  // INPUT: takes no parameter
  // OUPUT: has no return value.
  dequeue() {
    // check if array is empty
    if (this.isEmpty()) {
      console.log("We cannot delete cos array is empty");
      return;
    }

    // if array contains only one element
    else if (this.rear === this.front) {
      this.front = -1;
      this.rear = -1;
      return;
    }

    // contains more than one element
    else {
      this.front = (this.front + 1) % this.max_Size;
      return;
    }
  }

  frontFunc() {
    console.log(this.array[this.front]);
    return;
  }

  print() {
    console.log(this.array);
  }

  run() {
    this.enqueue(3);
    this.print();
    this.enqueue(4);
    this.dequeue();
    this.enqueue(7);
    this.enqueue(2);
    this.print();
  }
}

// Using the concept of Circular array to re-use previous empty space in the array.
// note: another cway to get:
// cuurent position or rear = i
// next position = (i + 1) % N
// previous position = (i + N - 1) % N
// where N is the length of the array, i is the current position of the index or of rear

const checkQueue = new Queue();

checkQueue.run();
