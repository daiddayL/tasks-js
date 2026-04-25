// https://leetcode.com/problems/filter-elements-from-array/description/?utm_source=chatgpt.com
var filter = function(arr, fn) {
    let filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
        filteredArr.push(arr[i]);
      }
    }
    
    return filteredArr;
  };
// https://leetcode.com/problems/simplify-path/description/
var simplifyPath = function(path) {
    const stack = [];
    const dirs = path.split('/');
    
    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        
        if (dir === '' || dir === '.') {
            continue;
        }
        else if (dir === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        }
        else {
            stack.push(dir);
        }
    }
    
    return '/' + stack.join('/');
};