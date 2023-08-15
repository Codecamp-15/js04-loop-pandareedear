// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้

// - หาผลรวมตัวเลขทุกตัว
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum = sum + i
// }
// console.log(sum);


// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// let count;
// let sum_even = 0;
// let sum_odd = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0){
//         sum_even = sum_even + i
//     }
    
//     if (i % 2 !== 0){
//         sum_odd = sum_odd + i
//     }
// }

// console.log(sum_even);
// console.log(sum_odd);

// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)
let sum = 0;
let sum_even2 = 0;
let sum_even3 = 0;


for (let i = 1; i <= 100; i++) {
 
    if (i % 2 === 0) {
        sum = i**2;
        sum_even2 = sum_even2 + sum;
    } 
     if (i % 3 === 0){
        sum = i**2;
        sum_even3 = sum_even3 + sum;
    }
}

console.log(sum_even2,sum_even3, sum_even2-sum_even3);
