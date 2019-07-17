
// Print a box

function printSquare(width, height){
    let count = 1;
    let emptySpace =" ".repeat(width-2);
   console.log("*".repeat(width));
   while (count <= height-2){

     count ++;

     console.log(`*${emptySpace}*`)
   }
   console.log("*".repeat(width));

 }
   printSquare(6,4)


// Result from Console

"******"
"*    *"
"*    *"
"******"


// The repeat() method returns a new string with a specified number of copies of the string it was called on.

