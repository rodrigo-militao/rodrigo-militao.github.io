const numbers = [1, 2, 3, 4, 5];

const filterOddWithFor = array => {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 !== 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const filterOdd = array => array.filter(element => element % 2 !== 0);

console.log('filterOddWithFor:', filterOddWithFor(numbers));
console.log('filterOdd:', filterOdd(numbers));
