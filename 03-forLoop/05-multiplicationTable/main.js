// ให้เขียนโค้ดแสดงสูตรคูณตั้งแต่ แม่ 2 ถึง แม่ 12 โดยแสดงผลออกมาใน console  
// 2 x 1 = 2  
// 2 x 2 = 4  
// ...  
// หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n


for (let index = 2; index <= 12 ; index++) {
    for (let n = 1; n <= 12; n++) {
        console.log(`${index} * ${n} = ${index * n}`)
    }  
    console.log("\n")
}
