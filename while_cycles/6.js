let original = "You are the best QA ever";

function encrypt(str) {
  let result = "";
  let i = 0;
  
  while (i < str.length) {
    if (str[i] !== " ") {
      result += str[i] + "br";
    } else {
      result += " ";
    }
    i++;
  }
  
  return result;
}

function decrypt(str) {
  let result = "";
  let i = 0;
  
  while (i < str.length) {
    if (str[i] === "b" && str[i + 1] === "r") {
      i += 2;
    } else {
      result += str[i];
      i++;
    }
  }
  
  return result;
}

let encrypted = encrypt(original);
let decrypted = decrypt(encrypted);

console.log("Оригинал: " + original);
console.log("Зашифровано: " + encrypted);
console.log("Расшифровано: " + decrypted);