const fizzBuzz = (userInput) => {
    // Create counter using a for loop based on what the user inputs
    for (let currentNumber = 0; currentNumber <= userInput; currentNumber++) {
        // If the currentNumber is divisable by 3 print Fizz
        if (currentNumber % 3 === 0) {
            console.log("Fizz");
        }
        // If the currentNumber is divisable by 5 print Buzz
        else if (currentNumber % 5 === 0) {
            console.log("Buzz");
        }
        // If the currentNumber is divisable by 3 and 5 print FizzBuzz
        else if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Else print the currentNumber
        else {
            console.log(currentNumber);
        }
    }
}

// Example: 
console.log(fizzBuzz(15))