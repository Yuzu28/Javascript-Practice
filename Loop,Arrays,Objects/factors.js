
function factors(number){
    var myfactors = [];
    
    for (var i = 1; i <= number; i++){
      if (number % i == 0) {
        myfactors.push(i)
      }
    }
    
    return myfactors
  }
  
  console.log(factors(96));



//   Outcome from Console

// [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96]