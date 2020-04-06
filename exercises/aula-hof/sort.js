const scores = [1, 21, 2, 10];

function comparar(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }

  return 0;
}

scores.sort((a, b) => a - b);

console.log('sort scores:', scores);

const fruits = ['cherries', 'apples', 'bananas'];
fruits.sort();

console.log('sort fruits', fruits);
