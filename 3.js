function myFunc (num) { 
  return function (num) { 
    console.log(num + num);
  }
}

const res = myFunc ()

res (-100)