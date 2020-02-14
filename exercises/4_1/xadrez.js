const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
rl.question('Qual peça você quer saber? ', (answer) => {
    
    answer = answer.toLowerCase()
    const rei = ["rei", "Pode mover-se em qualquer direção."]
    const rainha = ["rainha", "Pode mover-se em qualquer direção."]
    const torre = ["torre", "Linha reta. Horizontal ou Verical"]
    const bispo = ["bispo", " apenas na diagonal, mas também podem ir de um canto a outro do tabuleiro"]
    const cavalo = ["cavalo", "Ele pode se mover tanto duas casas para frente e uma para a direita ou para a esquerda, quanto uma casa para a esquerda ou para a direita e duas para frente."]
    const peao = ["peao", "só pode se mover 1 casa para frente a cada rodada e nunca pode se mover para trás."]

    if(answer == rei[0]){
        console.log(`${answer}: ` + rei[1]);
    }else if(answer == rainha[0]){
        console.log(`${answer}: ` + rainha[1]);
    }else if(answer == torre[0]){
        console.log(`${answer}: ` + torre[1]);
    }else if(answer == bispo[0]){
        console.log(`${answer}: ` + bispo[1]);
    }else if(answer == cavalo[0]){
        console.log(`${answer}: ` + cavalo[1]);
    }else if(answer == peao[0]){
        console.log(`${answer}: ` + peao[1]);
    }else{
        console.log("Esta peça não existe no xadrez.")
    }
    
  
    rl.close();
  });