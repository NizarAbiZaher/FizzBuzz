
const fizzBuzz = (userInput) => {
    // Counter & Loop
    for (let currentNumber = 1; currentNumber <= userInput; currentNumber++) {
        // Check if the number is divisble by 3 & 5
        if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (currentNumber % 3 === 0) {
            console.log('Fizz');
        }
        else if (currentNumber % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(currentNumber);
        }
    }
}

console.log(fizzBuzz(50))