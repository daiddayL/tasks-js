let day = "monday";
let message;

if (day.toLowerCase() === "monday") {
     message = "It's Monday!";
} 
else if (day.toLowerCase() === "tuesday") { // TUesday -> tuesday
     message = "It's Tuesday!";
} 
else if (day.toLowerCase() === "wednesday") {
     message = "It's Wednesday!";
} 
else if (day.toLowerCase() === "thursday") { 
     message = "It's Thursday!";
} 
else if (day.toLowerCase() === "friday") {
     message = "It's Friday!";
} 
else if (day.toLowerCase() === "saturday") {
     message = "It's Saturday!"; // Its Sunday! -> It's Saturday!
} 
else if (day.toLowerCase() === "sunday") { 
     message = "It's Sunday!";
} 
else {
     message = "Invalid day!";
}

console.log(message); // "It's Monday!"