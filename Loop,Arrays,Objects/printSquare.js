
// Print a Square
// Write a function printSquare which is given a size and prints a square of that size using asterisks.

stars = "*****"
lines = 0

function printSquare(number){
  while (lines < number) {
    console.log(stars)
    lines = lines + 1
}
  
}

printSquare(5)



Result from the console below:

"*****"
"*****"
"*****"
"*****"
"*****"
