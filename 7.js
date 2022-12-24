// Задание 1 Модуль 11

// const arrFunc = myArr2 => { 
//   if (myArr2.includes(null)) console.log(`Массив содержит ${null} `)
//   let result = myArr2.filter(el => typeof(el) === 'number' || el == null) //отстортировали по числам и null
//   let resultFilter = result.filter(el => el % 2 === 0 && el != null) // фильтрую по четным
//   let resultFilter2 = result.filter(el => el % 2 != 0 && el != null) //фильтрую по нечетным
//   console.log(`Количество четных чисел в массиве = ${resultFilter.length}`)
//   console.log(`Количество нечетных чисел в массиве = ${resultFilter2.length}`)
// }



// arrFunc([1, 2, 4, 5, 7, 8, 12, 'el1', 'el2', 'el3', 'el4', 'el5'])

// let myArr2 = [1, 2, 4, 5, 7, 8, 12, 'el1', 'el2', 'el3', 'el4', 'el5']
// if (myArr2.includes(null)) console.log(`Массив содержит ${null} `)
// let result = myArr2.filter(el => typeof(el) === 'number' || el == null) //отстортировали по числам и null
// let resultFilter = result.filter(el => el % 2 === 0 && el != null) // фильтрую по четным
// let resultFilter2 = result.filter(el => el % 2 != 0 && el != null) //фильтрую по нечетным
// console.log(`Количество четных чисел в массиве = ${resultFilter.length}`)
// console.log(`Количество нечетных чисел в массиве = ${resultFilter2.length}`)


// Задание 2 Модуль 11

// const myFunction = num => { 
//   if (num > 1000) return console.log ('Данные неверны')
//   else if (num === 1 || num === 0) return false // console.log (`${num} - не простое число`)
//   else { 
//     for (i = 2; i < num - 1; i ++) { 
//       if (num % i === 0) return false // console.log (`${num} - не простое число`) 
  
      
//     }
//     return true // console.log (`${num} - простое число`)
//   }
  
// }



// myFunction(2)


// Задание 3

function myFunc (num) { 
  return function (num) { 
    console.log(num + num);
  }
}

const res = myFunc ()

res (-100)


// Задание 4 

function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    console.log(current)
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}


printNumbers(5, 10);

// Задание 5

const result = (x, n) => {
  console.log(Math.pow(x, n))
  return Math.pow(x, n)
 }

result (2, 3)