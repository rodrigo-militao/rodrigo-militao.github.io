const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
];

const findDriverWithFor = array => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].isDriver === true) {
      return array[i];
    }
  }

  return undefined;
};

const findDriver = array => array.find(element => element.isDriver === true);

console.log('findDriverWithFor:', findDriverWithFor(users));
console.log('findDriver:', findDriver(users));
