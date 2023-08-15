console.log('lean while loop');

// ประเภทของ loop
//  Condition Loop ตัดสินใจจะรันต่อไหม จาก Boolean
//  Counting Loop "---------------" จาก ตัวเลข
//  List Loop "-------------------" จาก จำนวนของรายการ

// console.log("starting...")

// let i = 1;

// while (i <= 20) {
//     //loop block
//     // if (i % 3 == 0){
//     //     console.log(i)
//     // } else if (i % 5 == 0){
//     //     console.log(`${i} : High Five`)
//     // } 15 ไม่โชว์ high five เพราะหาร 3 ก่อน
    
//     if (i % 5 == 0){
//         console.log(`${i} : High Five`)
//     } else if (i % 3 == 0){
//         console.log(i)
//     }
//     // if (i % 3 !=0){
//     //     console.log(i)
//     // }
    
//     i++;
// }



// ##Fizzbuzz##
// Range : 1-20;
// divided by 3 : PRINT Fizz
// divided by 5 : PRINT BUZZ
// divided by 3 and 5 : PRINT FizzBuzz
// other : PRINT number
let i = 1;

while (i <= 20) { 
    if (i % 5 === 0 && i % 3 === 0){
        console.log(`${i} : FizzBuzz`)
    } else if (i % 3 === 0){
        console.log(`${i} : Fizz`)
    }
     else if (i % 5 === 0){
        console.log(`${i} : Buzz`)
    }
    else {console.log(i)}
    i++;
}

console.log("end....")