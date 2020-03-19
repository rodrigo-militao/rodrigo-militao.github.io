const países = {
    França: 'Paris',
    Brasil: 'Brasilia',
    Espanha: 'Madrid',
    Portugual: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(i in pairKeyValue) {
    console.log('--------');
    console.log('Pais:', pairKeyValue[i][0]);
    console.log('Capital:', pairKeyValue[i][1]);
  };
  