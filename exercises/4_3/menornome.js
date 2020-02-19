const array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Noé'];

function maior(nomes){
    let maior = nomes[0];
    for (let item in nomes){

       if (nomes[item].length > maior.length){
           maior = nomes[item];
       }
    }
    console.log(maior);
}


maior(array)