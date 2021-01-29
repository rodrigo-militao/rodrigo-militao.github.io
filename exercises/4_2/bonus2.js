let n = 61;
let divisores = 0;
for(let i=1 ; i<=n ; i++){
    if(n % i == 0){
        divisores++;
    }
}

if(divisores==2){
    console.log('É primo');
}
else{
    console.log('Não é primo');
}
