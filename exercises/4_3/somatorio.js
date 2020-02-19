function somatudo(num) {
    let somador = 0;

    for (let i = 0; i <= num; i++) {
        somador = somador + i;
        console.log(i + " + ")
    }

    return somador
}

console.log(somatudo(7))