let lista = [2, 3, 2, 5, 8, 2, 3];

function repete(lista){
    let counter = 0;
    let element = lista[0];
    for (const key in lista) {
        
        if(element == lista[key]){
            counter +=1;
        }
        element = lista[key];

    }

    return counter;
}

console.log(repete(lista));