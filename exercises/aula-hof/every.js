const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34];

const moreThan18 = age => age >= 18;

console.log('Maior de 18? (17)', moreThan18(17));
console.log('Maior de 18? (32)', moreThan18(32));

const everyMoreThen18 = ages => ages.every(moreThan18);

const everyMoreThen18WithFor = ages => {
  for (let i = 0; i < ages.length; i += 1) {
    if ((ages[i] >= 18) === false) return false;
  }

  return true;
};

console.log(
  'Todas as pessoas são maior de 18? (ages)',
  everyMoreThen18(ages)
);
console.log(
  'Todas as pessoas são maior de 18? (moreAges)',
  everyMoreThen18(moreAges)
);
console.log(
  'Todas as pessoas são maior de 18? ([])',
  everyMoreThen18([])
);
console.log(
  '[FOR] Todas as pessoas são maior de 18? (ages)',
  everyMoreThen18WithFor(ages)
);
console.log(
  '[FOR] Todas as pessoas são maior de 18? (moreAges)',
  everyMoreThen18WithFor(moreAges)
);
console.log(
  '[FOR] Todas as pessoas são maior de 18? ([])',
  everyMoreThen18WithFor([])
);
