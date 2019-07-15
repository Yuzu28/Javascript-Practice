
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
  console.log(tipAmount(100, "fair"));
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
  console.log(tipAmount(100, "fair"));
  console.log(tipAmount(100, "bad"));
  


  Tip Calculator 3

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
  console.log(splitAmount(100, "fair", 5));
  console.log(splitAmount(100, "bad",5));
  