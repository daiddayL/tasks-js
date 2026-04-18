for (let i = 10; i >= 1; i--) {
    let spaces = "  ".repeat(10 - i);
    let numbers = "";
    for (let j = 0; j < i; j++) {
      numbers += j + " ";
    }
    console.log(spaces + numbers.trim());
  }