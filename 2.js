const myFunction = num => { 
  if (num > 1000) return console.log ('Данные неверны')
  else if (num === 1 || num === 0) return false // console.log (`${num} - не простое число`)
  else { 
    for (i = 2; i < num - 1; i ++) { 
      if (num % i === 0) return false // console.log (`${num} - не простое число`) 
  
      
    }
    return true // console.log (`${num} - простое число`)
  }
  
}

myFunction(17)