/**
 * Function to print numbers from 1 to 100 with FizzBuzz logic.
 * - Print "Fizz" for multiples of 3.
 * - Print "Buzz" for multiples of 5.
 * - Print "FizzBuzz" for multiples of both 3 and 5.
 */
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);

        }
    }
}

// Execute the function 
fizzBuzz();
