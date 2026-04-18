let age = 20;
let isMember = false;
let pastEvents = 4;
let canAttend = false;
let vipPass = false;

if (age >= 18) {
     if (isMember) {
          canAttend = true;
     } else {
          if (pastEvents >= 5) {
               canAttend = true;
               vipPass = true;
          } else if (pastEvents >= 3) {
               canAttend = true;
          }
     }
}

console.log("Может участвовать: " + canAttend);
console.log("VIP пропуск: " + vipPass);