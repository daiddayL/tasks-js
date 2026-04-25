function filterLongStrings(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string" && arr[i].length > 5) {
        result.push(arr[i]);
      }
    }
    
    return result;
  }