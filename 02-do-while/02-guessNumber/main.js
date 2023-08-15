// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// - ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// - หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย


//PROGRAM-1 : Input User-1
// let ansNumber = prompt('Enter your magic number'); // => null, string: "","    ", "Qmdslkj", "12"
// let ansNumber === null || ansNumber.trim() === ''|| isNaN(ansNumber)
// let isNull = ansNumber === null;
// let isEmpty = ansNumber.trim() === '';
// let isNaN = isNaN(ansNumber);
// ------
// let isValid = ansNumber == null || ansNumber.trim() === '' || isNaN(ansNumber);   
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >= 1 && Number(ansNumber) <= 99;

// if (isValid) {
//     alert('Invalid Input');
// } else if (outOfRange ){
//     alert('Invalid Range')
// } else if (isInRange){
//     alert('Try to guess number')
// }
// ------

// V2 : รับ Input ได้เรื่อยๆจนกว่าจะพิมพ์ถูก / แต่ให้กด ESC เพื่อจบโปรแกรมได้

let ansNumber ='';
let isEmpty;
let isNan;
let outOfRange;

do {
    ansNumber = prompt('Enter your magic number');
    isEmpty = ansNumber.trim() === '';
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
    if(isEmpty || isNan){
        alert("Invalid Input. Try 1-99");
    } else if (outOfRange) {
        alert('Invalid Input. Try 1-99');
    }
} while (isEmpty || isNan);0

// Program 2 : Guess
// - ทายซ้ำ
// - Hint OutOfRange
// - Hint Invalid Range
// - Alert Correct
// - ทายได้ไม่เกิน 5 ครั้ง

let guessNumber;

do {
    guessNumber = prompt("Enter your answer") || '';
    isEmpty = guessNumber.trim() === '';
    isNan = isNaN(guessNumber);
    outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
    if(isEmpty || isNan){
        alert("Invalid Input. Try 1-99");
    } else if (outOfRange) {
        alert('Invalid Input. Try 1-99');
    } else if (+guessNumber > +ansNumber){
        alert('Too High');
    }  else if (+guessNumber < +ansNumber){
        alert('Too Low');
    }  else if (+guessNumber === +ansNumber){
        alert('Correct');
    }

} while(+guessNumber != +ansNumber)