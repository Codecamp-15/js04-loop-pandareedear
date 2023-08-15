// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100



// for (let i = 1; i <= 100; i++) {
//     let count = 0;
//     for (let divider = 1; divider <= 100; divider++) {
//       if (i % divider === 0) {
//         count++;
//       }
//     }
//     if (i !== 1 && count <= 2) console.log(i);
//   }



for (let n=2;n<=100;n++){
  // only 1 Number
  let isPrime = true;
  // divider 2,3,4,...,n-1
    for(let divider=2;divider<n;divider++)
    {
      if (n % divider == 0) {
        isPrime = false;
        break;
      }
      
    }
    if (isPrime)console.log(n);
  }
    // if(isPrime)console.log(`number ${n} is prime number`);
    // else console.log(`number${n} not prime number`);


