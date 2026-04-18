function checkBrackets(arr) {
    const stack = [];
    const pairs = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    
    for (let char of arr) {
      if (pairs[char]) {
        stack.push(char);
      } else if (Object.values(pairs).includes(char)) {
        const last = stack.pop();
        if (pairs[last] !== char) {
          return false;
        }
      }
    }
    
    return stack.length === 0;
  }
  
  console.log(checkBrackets(['(', ')', '(', ')', ')']));
  console.log(checkBrackets(['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a']));
  console.log(checkBrackets(['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']));