/**
 * Example of using stack to check if Parentheses in expression are balanced
 */

function balancedParen() {
  const expre = "[()]{}{[()()]()}";

  const parenArray = [
    ["[", "]"],
    ["{", "}"],
    ["(", ")"],
  ];

  // const stack = new Stack();
  const stack = [];

  for (let i = 0; i < expre.length; i++) {
    if (isOpen(expre[i])) {
      stack.push(expre[i]);
      continue;
    } else {
      // check if stack is empty.
      if (isEmpty(stack) || !isMatches(stack.pop(), expre[i])) {
        return false;
      }
      // let char = stack.pop();
      // if (!isMatches(char, expre[i])) {
      //   stack.pop();
      //   //continue;
      // } else {
      //   console.log("Matches false");
      //   return false;
      // }
    }
  }

  function isOpen(aChar) {
    for (let i = 0; i < parenArray.length; i++) {
      let innerArr = parenArray[i];
      if (innerArr[0] === aChar) {
        return true;
      }
    }
    return false; // aChar is not an open bracket.
  }

  function isMatches(openChar, closeChar) {
    for (let i = 0; i < parenArray.length; i++) {
      let innerArr = parenArray[i];
      if (innerArr[0] === openChar) {
        return innerArr[1] === closeChar;
      }
    }

    return false;
  }

  function isEmpty(stack) {
    if (stack.length === 0) {
      return true;
    }
    // console.log("Stack is no Empty - False");
    return false;
  }

  // console.log(stack);
  return isEmpty(stack);
}

// console.log(balancedParen());

const testIsBalance = balancedParen();

if (testIsBalance) {
  console.log("Balanced");
} else {
  console.log("Not Balanced");
}
