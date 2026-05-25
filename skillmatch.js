const Candidato = require("./Candidato");

const candidato1 = new Candidato(
    "Ana",
    "Front-End",
    ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
    3
);   


const Vaga = require("./Vaga");

const vaga1 = new Vaga(
    1,
    "TechStart",
    "Desenvolvedor Front-End Júnior",
    ["JavaScript", "GitHub", "Lógica de Programação"],
    2800,
    "Remoto"
);   

const vaga2 = new Vaga(
    2,
    "CodeLab",
    "Estágio Front-End",
    ["JavaScript", "Kanban", "GitHub"],
    1800,
    "Híbrido"
);

const vaga3 = new VagaFrontEnd(
    3,
    "InovaTech",
    "Desenvolvedor Front-End Pleno",
    ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
    3500,
    "Presencial",
    true,

);

const vagas = [vaga1, vaga2, vaga3]; 

console.log(vagas);