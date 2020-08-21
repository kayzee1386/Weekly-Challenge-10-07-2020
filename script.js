function exercise1(num) {
  let multiplesOfThree = [];
  let multiplesOfFive = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      multiplesOfThree.push(i);
    }
    if (i % 5 === 0) {
      multiplesOfFive.push(i);
    }
  }

  // Get the sum of multiplesOfThree
  // Get the sum of multiplesOfFive
  // Sum both together
  const combined = [...multiplesOfThree, ...multiplesOfFive];

  let sum = 0;
  for (let i = 0; i < combined.length; i++) {
    sum = sum + combined[i];
  }

  // const sum = combined.reduce((acc, element) => acc + element);
  alert(sum);
}

function solveChalOne() {
  const number = parseInt(prompt('Enter a number'));
  exercise1(number);
}


/* Exercise 2 */

function exercise2() {
  let num = [];
  // Convert the number to string
  num = num.toString();
  // Convert the string to an array
  num = [...num];
  
  let finalString = '';
  for (let i = 0; i < num.length; i++) {
    const current = num[i];
    const next = num[i + 1];
    // Check if both numbers are even
    if (current % 2 === 0 && next % 2 === 0) {
      finalString = finalString + current + '-';
    } else {
      finalString = finalString + current;
    }
  }
  console.log(finalString);
}
function solveChalTwo(){
var inputs = prompt('please input numbers')
}
exercise2();

/* End of exercise2 */


/* Exercise 3 */

function exercise3() {
  // Primitive: numbers, strings
  // non-Primitive: objects, arrays, functions
  const myArr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  
  const mySet = new Set(myArr);

  const converted = [...mySet];

  let occurence = 0;
  let item = null;
  for (let i = 0; i < converted.length; i++) {
    // i = 0, converted[i] = 3;
    const appearance = [];
    for (let j = 0; j < myArr.length; j++) {
      if (myArr[j] === converted[i]) {
        appearance.push(myArr[j]);
      }
    }
    const length = appearance.length;
    if (length > occurence) {
      occurence = length;
      // occurence = 4
      item = converted[i];
      // item = 3
    }
  }
  console.log(item);
}
exercise3();

/* End of exercise 3 */