const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) {
        sum += numbers[i];
    }
}
console.log(sum); 
// 6 - потому что суммируются элементы с нечетными индексами (1, 3, 5): 2 + 4 = 6