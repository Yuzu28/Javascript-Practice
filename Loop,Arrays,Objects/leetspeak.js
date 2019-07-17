var list = {
    A : '4',
    E : '3',
    G : '6',
    L : '1',
    O : '0',
    S : '5',
    T : '7',
  
  }
  
  
  function leetspeak (str){
    var arr = str.toUpperCase().split('');
    for (var i in arr){
      arr[i] = list[arr[i]];
    }
    return arr.join('');
  }
  
  console.log(leetspeak('Leet'));
  
  