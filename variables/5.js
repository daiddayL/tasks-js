// a.
const number = 15;
const result = number + 5;
console.log(result); // 20 - потому что 15 + 5

// b.
const number2 = "28";
const result2 = number2 + 2;
console.log(result2); // "282" - потому что строка + число = конкатенация

// c.
console.log(null || 2 || undefined); // 2 - потому что || возвращает первый true (2)

// d.
const x1 = 5;
const y1 = 10;
console.log(x1 > 0 && y1 < 20); // true - потому что 5>0 и 10<20
console.log(x1 < 0 && y1 > 0); // false - потому что 5<0 false
console.log(x1 < 0 && y1 < 0); // false - потому что 5<0 false
console.log(x1 > 0 && "Hello"); // "Hello" - потому что 5>0 true, && возвращает "Hello"

// e.
const a2 = 0;
const b2 = "World";
console.log(a2 > 0 || b2.length > 0); // true - потому что b2.length=5 >0
console.log(a2 > 0 || b2.length === 0); // false - потому что 0>0 false и 5===0 false
console.log(a2 > 0 || ""); // "" - потому что оба false, || возвращает последнее false
console.log(a2 < 0 || "Hello"); // "Hello" - потому что 0<0 false, || возвращает "Hello"

// f.
let x2 = 5;
let y2 = 10;
let z2 = 15;
let result3 = (x2 > y2 || y2 < z2) && !(z2 === x2);
console.log(result3); // true - потому что (false||true)=true, (15===5)=false, !false=true, true&&true=true