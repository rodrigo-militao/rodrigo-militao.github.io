const learn = new Promise((resolve, reject) => {
    const array = [];
    for (let i = 1; i <= 10; i++) {
        array.push(Math.floor(Math.random() * 50));
    }
    console.log('Array: ' + array);
    const arraySquared = array.map((el) => el ** 2);
    console.log('Array Squared: ' + arraySquared);

    const sumArray = arraySquared.reduce( (accumulator, currentValue) => accumulator + currentValue);
    console.log('Sum array squared: ' + sumArray);

    if (sumArray < 8000) resolve('Sucesso')
    else reject('Falhou')
    
});

learn.then((message)=> {
  console.log(message);
}).catch((err) => {
  console.log(err);
});