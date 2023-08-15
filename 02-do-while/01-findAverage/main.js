// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

// ```js
// /*
// GET : Input
// CHECK : number
// IF number
//     ADD number to sum
//     ADD 1 to count
//     BACK TO LINE 7 
// ELSE 
//     PRINT sum
//     PRINT average
// */ 

let number = +prompt("Enter number: ");
let sum = 0;

do { 
    let number = +prompt("Enter number: ");
    let count = 0;
    if (number > 0) {
    sum = sum + number;
    count++;
    alert("sum : " + sum +"count : "+ " " + count)
    };
} while (number !=="" || number.trim !=="");


ansNumber = prompt('Enter your magic number') || ''

num = Number(ansNumber)
isEmpty = ansNumber.trim() === '';
isNan = isNaN(ansNumber)
// o
