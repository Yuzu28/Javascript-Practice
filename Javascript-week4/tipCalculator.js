
// Tip Calculator

function tipAmount(bill, levelOfService){
    if (levelOfService == "good" ){
      return bill*0.20;
    }
    
    else if (levelOfService == "fair" ){
      return bill*0.15;
    }
    else if (levelOfService == "bad" ){
      return bill*0.10;
    }
  }
  
  console.log(tipAmount(100, "good"));
  console.log(tipAmount(40, "fair"));
  console.log(tipAmount(100, "bad"));




//   Tip Calculator 2

  function tipAmount(bill, levelOfService){
    if (levelOfService == "good" ){
      return (bill*0.20) + bill;
    }
    
    else if (levelOfService == "fair" ){
      return (bill*0.15) + bill;
    }
    else if (levelOfService == "bad" ){
      return (bill*0.10) + bill;
    }
  }
  
  console.log(tipAmount(100, "good"));
  console.log(tipAmount(40, "fair"));
  console.log(tipAmount(100, "bad"));
  


// Tip Calculator 2: Using Switch Statement

const service = prompt('How was Your Service: good, fair, or bad');
const bill = parseInt(prompt('Bill'));

switch (String(service)) {
  case 'good':
    console.log((bill*0.20) + bill);
    break;
    
  case 'fair':
    console.log((bill*0.15) + bill);
    break;
    
  case 'bad':
    console.log((bill*0.10) + bill);
    break;
  default:
    console.log('Sorry, please enter somethig valid');
}










  // Tip Calculator 3

  function splitAmount(bill, levelOfService,people){
    if (levelOfService == "good" ){
      return "The bill will be split $" + ((bill*0.20) + bill)/people +" for each person";
    }
    
    else if (levelOfService == "fair" ){
      return "The bill will be split $" +((bill*0.15) + bill)/people +" for each person";
    }
    else if (levelOfService == "bad" ){
      return "The bill will be split $" +((bill*0.10) + bill)/people +" for each person";
    }
  }
  
  console.log(splitAmount(100, "good",5));
  console.log(splitAmount(40, "fair", 2));
  console.log(splitAmount(100, "bad",5));
  




Tip Calculator 3: Using switch


const service = prompt('How was Your Service: good, fair, or bad');
const bill = parseInt(prompt('Bill'));
const people = parseInt(prompt('How many people will split the Bill'));

switch (service) {
  case 'good':
    console.log(((bill*0.20) + bill)/people);
    break;
    
  case 'fair':
    console.log(((bill*0.15) + bill)/people);
    break;
    
  case 'bad':
    console.log(((bill*0.10) + bill)/people);
    break;
  default:
    console.log('Sorry, please enter somethig valid');
}