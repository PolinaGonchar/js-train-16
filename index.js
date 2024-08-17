// Task 1

/**
 * The `filterStudentsByGrade` function filters students by their grade and displays information about them.
 *
 *  grade - The grade level to filter by.
 */
function filterStudentsByGrade(students, grade) {
  console.error("If you see this message, Task 1 was not completed correctly");
  console.clear();
  console.log("Task: 1 ==============================");
  const filteredStudents = students.filter((student) => student.grade === grade);
  filteredStudents.forEach((student) => {
    console.log(student);
  });
}

// Call the function to filter students with grade "A"
filterStudentsByGrade(
  [
    { name: "John", grade: "A" },
    { name: "Kate", grade: "B" },
    { name: "Mike", grade: "A" },
    { name: "Anna", grade: "C" },
    { name: "Tom", grade: "B" },
  ],
  "A"
);

// Task 2
/**
 * The `logArrayElements` function takes an array and logs each element to the console.
 *
 *  arr - The array to process.
 */
function logArrayElements(arr) {
  if (!Array.isArray(arr)) {
    console.error("The argument must be an array!");
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i} : ${arr[i]}`);
  }
}

// Check
console.log("Task: 2 ==============================");
logArrayElements([1, 2, 3, "a", "b", "c"]);
// Outputs to the console:
// Element 0: 1
// Element 1: 2
// Element 2: 3
// Element 3: a
// Element 4: b
// Element 5: c

// Task 3
/**
 * The `warnAboutMaxArrayLength` function checks if the length of the array exceeds the specified maximum value.
 *
 *  arr - The array to check.
 *  maxLength - The maximum array length.
 */
function warnAboutMaxArrayLength(arr, maxLength) {
  if (!Array.isArray(arr) || typeof maxLength !== "number") {
    console.error(
      "The first argument must be an array, the second argument must be a number!"
    );
    return null;
  }
  if (arr.length > maxLength) {
    console.warn("Warning! The array length exceeds the maximum allowed!");
  } else {
    console.info("The array length does not exceed the maximum allowed.");
  }
}

// Check
console.log("Task: 3 ==============================");
warnAboutMaxArrayLength([1, 2, 3, 4, 5], 3);
// Outputs to the console a warning: "Warning! The array length exceeds the maximum allowed!".

// Task 4
/**
 * The `compareArrays` function takes two arrays of numbers as arguments and compares them.
 * It uses `console.assert()` to check if both arrays are identical.
 *
 *  arr1 - The first array of numbers.
 *  arr2 - The second array of numbers.
 */
function compareArrays(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  console.assert(
    JSON.stringify(arr1) === JSON.stringify(arr2),
    "The arrays are not identical!"
  );
}

console.log("Task: 4 ==============================");
compareArrays([1, 2, 3, 4, 5], [1, 2, 3, 4]);
// Outputs "Assertion failed: The arrays are not identical!"

// Task 5
/**
 * The `buildMatrix` function creates a two-dimensional array (matrix) of size x size,
 * fills it with random numbers from 0 to 9, and then logs the matrix to the console.
 *
 *  size - The size of the matrix.
 *  Returns the generated matrix.
 */
function buildMatrix(size) {
  if (typeof size !== "number") {
    console.error("The argument must be a number!");
    return null;
  }
  const matrix = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const randomNumber = Math.floor(Math.random() * 10);
      row.push(randomNumber);
    }
    matrix.push(row);
  }
  console.table(matrix);
  return matrix;
}

console.log("Task: 5 ==============================");
buildMatrix(5);
// Outputs to the console a 5x5 matrix filled with random numbers from 0 to 9.
// Task 6
/**
 * The `traceBackward` function prints numbers from a given number down to 1 in reverse order,
 * using recursion.
 *
 *  n - The starting number.
 */
function traceBackward(n) {
  console.log(n);
  if (n > 1) {
    traceBackward(n - 1);
  } else {
    console.trace("Reached the end");
  }
}

console.log("Task: 6 ==============================");
traceBackward(5);
// Outputs to the console numbers from 5 to 1, then displays the call stack.

// Task 7
/**
 * The `displayGroupedInfo` function displays information about a group of students to the console, organizing data into groups.
 * students - An array of student objects.
 */
function displayGroupedInfo(students) {
  for (let student of students) {
    console.group(`Student: ${student.name}`);
    console.info(`Age: ${student.age}`);
    console.info(`Subject: ${student.subject}`);
    console.groupEnd();
  }
}

console.log("Task: 7 ==============================");
displayGroupedInfo([
  { name: "Alex", age: 22, subject: "Math" },
  { name: "Max", age: 23, subject: "Physics" },
  { name: "Anna", age: 21, subject: "Chemistry" },
]);
// Outputs to the console:
// Student: Alex
//   Age: 22
//   Subject: Math
// Student: Max
//   Age: 23
//   Subject: Physics
// Student: Anna
//   Age: 21
//   Subject: Chemistry

// Task 8
/**
 * The `validateUserInput` function checks the validity of user-entered data.
 * It uses `console.warn()` and `console.assert()` for this purpose.
 *
 *  userInput - An object with user-entered data.
 */
function validateUserInput(userInput) {
  console.assert(userInput.username, "Error: Username is missing!");
  console.assert(userInput.password, "Error: Password is missing!");
  if (userInput.password && userInput.password.length < 8) {
    console.warn("Warning: Password must be longer than 8 characters!");
  }
}

console.log("Task: 8 ==============================");
validateUserInput({ username: "alex", password: "pass" });
// Outputs to the console:
// Warning: Password must be longer than 8 characters!

// Task 9
/**
 * The `calculateTotalPrice` function calculates the total price of products and logs the execution time.
 *
 * products - An array of product objects with `price` and `title` properties.
 */
function calculateTotalPrice(products) {
  console.time("calculateTotalPrice");
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  console.log("Total price of products:", total);
  console.timeEnd("calculateTotalPrice");
}

console.log("Task: 9 ==============================");
const products = [
  { title: "Phone", price: 1000 },
  { title: "Laptop", price: 2000 },
  { title: "Tablet", price: 500 },
];

calculateTotalPrice(products);
// Outputs:
// Total price of products: 3500
// calculateTotalPrice: 0.994ms (time may vary)

// Task 10
/**
 * The `countVowelsAndConsonants` function counts the number of vowels and consonants in a word.
 *
 *  word - The word for which to count the letters.
 */
function countVowelsAndConsonants(word) {
  let vowels = "aeiou";
  for (let letter of word) {
    letter = letter.toLowerCase();
    if (vowels.includes(letter)) {
      console.count("Vowel");
    } else {
      console.count("Consonant");
    }
  }
}
console.log("Task: 10 ==============================");
countVowelsAndConsonants("HelloWorld!");
