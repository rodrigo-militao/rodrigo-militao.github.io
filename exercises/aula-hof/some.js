const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34];

const lessThan18 = age => age < 18;

console.log('Menor de 18? (17)', lessThan18(17));
console.log('Menor de 18? (32)', lessThan18(32));

const anyLessThen18 = ages => ages.some(lessThan18);

const anyLessThen18WithFor = ages => {
  for (let i = 0; i < ages.length; i += 1) {
    if (ages[i] < 18) return true;
  }

  return false;
};

console.log('Alguma pessoa menor de 18? (ages)', anyLessThen18(ages));
console.log('Alguma pessoa menor de 18? (moreAges)', anyLessThen18(moreAges));
console.log('Alguma pessoa menor de 18? ([])', anyLessThen18([]));
console.log('[FOR] Alguma pessoa menor de 18? (ages)', anyLessThen18WithFor(ages));
console.log('[FOR] Alguma pessoa menor de 18? (moreAges)', anyLessThen18WithFor(moreAges));
console.log('[FOR] Alguma pessoa menor de 18? ([])', anyLessThen18WithFor([]));
