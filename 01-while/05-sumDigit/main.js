console.log('Problem 5')
let n = +prompt('Enter number: ');

if (n < 0) n = -n;
// ถ้าติดลบ = -n

let count = 0;
//  while (n >= 1) {
//     console.log(n);
//     count++;
//     n = n / 10;
//  }

//  console.log(count);

// 1152 => (115*10) + 2
// (1152-2) / 10 =>115
// (115-5) / 10 =>11
// (11 -1) / 10 => 1
// (1-1) / 10 => 0
let sum = 0;
while (n) {
    let remainder = n % 10;
    n = (n - remainder) / 10;
    sum += remainder;
    count++;
}

console.log(count, sum)
