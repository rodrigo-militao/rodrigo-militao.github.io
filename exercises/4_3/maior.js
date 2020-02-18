function maior(lista){
    let maior = lista[0];
    for (let item in lista){

       if (lista[item] > maior){
           maior = lista[item];
       }
    }
    console.log(maior);
}

lista = [2, 3, 6, 7, 4, 1];

maior(lista)