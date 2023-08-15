// - ให้คำนวณเงินฝากสะสมโดยปีที่ 1 มีเงินเริ่มต้น 100,000 ธนาคารให้ดอกเบี้ยร้อยละ 2.5 ต่อปี
// - โดยจ่ายดอกเบี้ยปีละครั้ง ดอกเบี้ยที่ได้จะสะสมและทบยอดไปในเงินฝากปีถัดไป
// - เมื่อครบ 10 ปี จะมียอดเงินฝากสะสมเท่าใด (ไม่มีการฝากเพิ่มและถอนออก)


let deposit = 100000;
let interest_rate = 0.025;
let interest = 0;
for (let index = 1; index <= 10; index++) {
    interest = deposit * interest_rate
    deposit+=interest
}
console.log(deposit)