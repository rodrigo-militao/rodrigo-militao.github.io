function menor(lista){
    let menor = lista[0];
    for (let item in lista){

       if (lista[item] < menor){
           menor = lista[item];
       }
    }
    console.log(menor);
}

lista = [2, 3, 6, 7, 4, 1];

menor(lista)