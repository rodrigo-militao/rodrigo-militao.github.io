const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };


const studentshabilities = (student) => {
  const arrayofskills = Object.keys(student);
  const arrayofvalues = Object.values(student);
for (let i in arrayofskills){
    console.log(`${arrayofskills[i]}, Nível: ${arrayofvalues[i]}`);
  }
}

studentshabilities(student2);