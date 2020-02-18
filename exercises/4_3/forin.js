let infos = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
    
  };

let infos2 = {
    personagem: "Tio Patinhas", 
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178", 
    nota: "O último MacPatinhas", 
    recorrente: "Sim",
};

  //console.log(`Bem vinda, ${infos.personagem}`)

for (const info in infos) {
    if (infos.hasOwnProperty(info)) {
        const element = infos[info];
        console.log(element)
    }
}
for (const info2 in infos2) {
    if (infos2.hasOwnProperty(info2)) {
        const element2 = infos2[info2];
        console.log(element2)
    }
}