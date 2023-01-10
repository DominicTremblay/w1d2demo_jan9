// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// Extract the command-line arguments
const args = process.argv.slice(2); // => gives us the arguments
console.log('args:', args);

// Edge case: We need at least 2 arguments
if (args.length < 2) {
  console.log("Error: please enter at least 2 arguments");
  process.exit();
}

// go through each of the arguments
// for each
// for of
// for (let i=0...; ...)

// create an accumulator

let total = 0;

for (let arg of args) {
  // Edge case: If any argument is not a whole number, skip it.
  // nb % 1 === 0
  // .floor
  // Number.isInteger()

  if (Number.isInteger(Number(arg))) {
    // add the args
    // convert the arg to a number => typecast
    total += Number(arg);
    console.log('arg:', arg, 'type:', typeof arg);
  }
  // Edge case: If any argument is not a number, output an error message.
  if (isNaN(Number(arg))) {
    console.log('Error: please enter only numbers');
    // break
    // return => ouput a value from function (a function returns a value), it stops the function execution (side effect)
    // ?
    // stop the script execution
    // return;
    process.exit();
  } 
}

// print out the sum
console.log('total:', total);
