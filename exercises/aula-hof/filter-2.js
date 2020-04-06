const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
];

const filterDriverWithFor = array => {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].isDriver === true) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

const filterDriver = array => array.filter(element => element.isDriver === true);

console.log('filterDriverWithFor:', filterDriverWithFor(users));
console.log('filterDriver:', filterDriver(users));
console.log('original:', users);
