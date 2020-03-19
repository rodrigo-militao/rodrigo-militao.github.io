const customer = {
    firstName: 'Rodrigo',
    age: 20,
    job: 'Software Developer',
};

function newkey(obj, key, value) {
  obj[key] = value;
  return obj;
}

console.log (newkey(customer, 'wife', 'Vitória'));