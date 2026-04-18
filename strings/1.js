let s = "Knowledge of built-in JavaScript methods speeds up a tester’s work.";
// Ни один из методов строк не изменяет исходную строку
// Строки в JavaScript иммутабельны (неизменяемы). Все методы возвращают новую строку, не меняя оригинал

s.charAt(0);
s.charAt(s.length - 1);
s.substring(1, 4);
s.substr(1, 3);
s.slice(-3);
s.indexOf("l");
s.lastIndexOf("l");
s.split("of");
s.replace("l", "L");
s.replaceAll("l", "L");
s.toUpperCase();
s.toLowerCase();

console.log(s); // Исходная строка осталась неизменной