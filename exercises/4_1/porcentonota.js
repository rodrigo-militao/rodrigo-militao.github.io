const percentnota = 100
if(percentnota>100 || percentnota<0) {
    console.log('Valor não corresponde.')
}else if(percentnota>=90){
    console.log("A")
}else if(percentnota>=80){
    console.log("B")
}else if(percentnota>=70){
    console.log("C")
}else if(percentnota>=60){
    console.log("D")
}else if(percentnota>=50){
    console.log("E")
}else if(percentnota<50 && percentnota>=0){
    console.log("F")
}else{
    console.log('Valor não corresponde.')
}