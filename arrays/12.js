for (let i = 10; i >= 1; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += j + " ";
    }
    console.log(row.trim());
  }