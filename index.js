function sumEvenOdd(numbers) {
  let evenSum = 0;
  let oddSum = 0;

  // Loop through each number in the array
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenSum += number; // Add to evenSum if the number is even
    } else {
      oddSum += number; // Add to oddSum if the number is odd
    }
  }

  return [evenSum, oddSum]; // Return an array with even and odd sums
}

// Test the function
console.log(sumEvenOdd([1, 2, 3, 4, 5])); // Expected output: [6, 9]

function fahrenheitToCelsius(fahrenheit) {
  // Convert Fahrenheit to Celsius using the formula
  return (fahrenheit - 32) * (5 / 9);
}

function celsiusToFahrenheit(celsius) {
  // Convert Celsius to Fahrenheit using the formula
  return (celsius * (9 / 5)) + 32;
}

// Test the functions
console.log(fahrenheitToCelsius(32));  // Expected output: 0
console.log(celsiusToFahrenheit(0));   // Expected output: 32


//reversing the array
function reverseString(str) {
  // Split the string into an array of characters, reverse the array, and join it back into a string
  return str.split("").reverse().join("");
}

// Test the function
console.log(reverseString("JavaScript"));  // Expected output: "tpircSavaJ"


//counting vowels
function countVowels(str) {
  let vowelCount = 0;
  const vowels = "aeiouAEIOU"; // String containing all vowels (both lowercase and uppercase)

  // Loop through each character in the string
  for (let char of str) {
    // Check if the character is a vowel
    if (vowels.includes(char)) {
      vowelCount++; // Increment the count if it is a vowel
    }
  }

  return vowelCount; // Return the total count of vowels
}

// Test the function
console.log(countVowels("JavaScript is fun"));  // Expected output: 5


function fizzBuzzExtended() {
  for (let i = 1; i <= 50; i++) {
    let output = ""; // Initialize an empty string to hold the output

    // Check for multiples of 3, 5, and 7
    if (i % 3 === 0) output += "Fizz"; // Append "Fizz" if divisible by 3
    if (i % 5 === 0) output += "Buzz"; // Append "Buzz" if divisible by 5
    if (i % 7 === 0) output += "Boom"; // Append "Boom" if divisible by 7

    // If output is still empty, it means the number is not a multiple of 3, 5, or 7
    if (output === "") {
      output = i; // Set output to the number itself
    }

    console.log(output); // Print the output
  }
}

// Call the function
fizzBuzzExtended(); // Expected output: Correct sequence of Fizz, Buzz, Boom, and FizzBuzzBoom




