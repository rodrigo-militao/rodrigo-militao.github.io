const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplyByThreeWithFor = (array) => {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i] * 3);
  }

  return newArray;
};

const multiplyByThree = (array) => {
  const newArray = [];

  array.forEach(element => newArray.push(element * 3));

  return newArray;
};

console.log('numbers:', numbers);
console.log('multiplyByThreeWithFor:', multiplyByThreeWithFor(numbers));
console.log('multiplyByThree:', multiplyByThree(numbers));
