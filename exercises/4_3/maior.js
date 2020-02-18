function maior(lista){
    let maior = lista[0];
    for (let item in lista){

       if (lista[item] > maior){
           maior = lista[item];
       }
    }
    return maior;
}

lista = [2, 3, 6, 7, 10, 1];

maior(lista)