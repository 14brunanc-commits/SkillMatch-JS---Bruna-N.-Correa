const Candidato = require("./Candidato");

const candidato = new Candidato(
    "Ana",
    "Front-End",
    ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
    3
);   


const Vaga = require("./Vaga"); 
const VagaFrontEnd = require("./VagaFrontEnd");

const vaga1 = new Vaga(
    1,
    "TechStart",
    "Desenvolvedor Front-End Júnior",
    ["NextJS", "GitHub", "Lógica de Programação"],
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
    ["NextJS", "VueJS", "Kanban"],
    3500,
    "Presencial",
    true,

);
const vaga4 = new VagaFrontEnd(
    4,
    "InovaTech",
    "Desenvolvedor Front-End Junior",
    ["NextJS", "VueJS", "Kanban"],
    3500,
    "Presencial",
    false,

);

const vagas = [vaga1, vaga2, vaga3, vaga4]; 

console.log(vagas);


function calcularCompatibilidade(candidato, vaga) {
    const habilidadesCandidato = candidato.habilidades;
    const requisitosVaga = vaga.requisitos;
    const quantidadeRequisitosAtendidos = requisitosVaga.filter(requisito => habilidadesCandidato.includes(requisito)).length;
    const totalRequisitosVaga = requisitosVaga.length;
    return Number(quantidadeRequisitosAtendidos / totalRequisitosVaga * 100)
}
 
function classificarCompatibilidade(compatibilidade) {
    if (compatibilidade >= 80) {
        return "Alta compatibilidade";
    } else if (compatibilidade <=79 && compatibilidade >= 50) {
        return "Média compatibilidade";
    } else {
        return "Baixa compatibilidade";
    }
}

function listarHabilidadesFaltantes(habilidadesCandidato, habilidadesVaga) {
    return habilidadesVaga.filter(habilidade => !habilidadesCandidato.includes(habilidade));
}

function encontrarVagaComMaiorCompatibilidade(candidato, vagas) {
    let maiorCompatibilidade = 0;
    const vagasComCompatibilidade = vagas.map(vaga => {
        const compatibilidade = Math.round(calcularCompatibilidade(candidato, vaga))
        maiorCompatibilidade = Math.max(maiorCompatibilidade, compatibilidade);
        return {vaga, compatibilidade};
    });
    const vagaComMaiorCompatibilidade = vagasComCompatibilidade.find(v => Number(v.compatibilidade) === Number(maiorCompatibilidade));
    return vagaComMaiorCompatibilidade
}

const exibirMensagemFinal = (nome) =>  {
  console.log(`${nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`);
}


function gerarRecomendacaoEstudo(candidato, vaga) {
    let todasHabilidadesFaltantes = []
    for (const vaga of vagas) {
        const habilidadesFaltantes = listarHabilidadesFaltantes(candidato.habilidades, vaga.requisitos);
        todasHabilidadesFaltantes.push(...habilidadesFaltantes);
    }
    todasHabilidadesFaltantes = [...new Set(todasHabilidadesFaltantes)];
    let textohabilidadesFaltantes = "";
    if (todasHabilidadesFaltantes.length > 2) {
        todasHabilidadesFaltantes[todasHabilidadesFaltantes.length - 1] = "e " + todasHabilidadesFaltantes[todasHabilidadesFaltantes.length - 1];
    textohabilidadesFaltantes = todasHabilidadesFaltantes.join(", ");
    }
    if (todasHabilidadesFaltantes.length === 2) {
        todasHabilidadesFaltantes[todasHabilidadesFaltantes.length - 1] = "e " + todasHabilidadesFaltantes[todasHabilidadesFaltantes.length - 1];
    textohabilidadesFaltantes = todasHabilidadesFaltantes.join(" ");
    }
    if (todasHabilidadesFaltantes.length === 1) {
        textohabilidadesFaltantes = todasHabilidadesFaltantes[0];
    }
    if (todasHabilidadesFaltantes.length === 0) {
        return "Parabéns! Você atende a todos os requisitos dessa vaga. Continue se aprimorando para manter sua competitividade no mercado de trabalho.";
    }
    return `Recomendação de estudo: 
Priorize estudar ${textohabilidadesFaltantes}, pois esses conteúdos aparecem nas vagas analisadas.
`;

}

function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 1000);
  });
}

async function iniciarSistema() {
  const vagasCarregadas = await buscarVagasSimuladas();
  console.log("Vagas carregadas com sucesso!");
  console.log(vagasCarregadas); 
  const resultadosAnalise = [];
  const contaAnalises = criarContadorDeAnalises();
  let totalAnalises = 0;
  for (const vaga of vagasCarregadas) {
    totalAnalises = contaAnalises()
    const compatibilidade = calcularCompatibilidade(candidato, vaga);
    const habilidadesFaltantes = listarHabilidadesFaltantes(candidato.habilidades, vaga.requisitos);
    const resultado = 
    `Empresa: ${vaga.empresa}
     Cargo: ${vaga.cargo}
     Compatibilidade: ${compatibilidade.toFixed(2)}%
     Habilidades encontradas: ${vaga.requisitos.filter(requisito => candidato.habilidades.includes(requisito)).join(", ")}
     Habilidades faltantes: ${habilidadesFaltantes.join(", ")}
     Classificação: ${classificarCompatibilidade(compatibilidade)}
     ${vaga instanceof VagaFrontEnd ? vaga.exibirRequerExperienciaFigma() : ""}
     `;
     
    resultadosAnalise.push(resultado);
    if(habilidadesFaltantes.length > 0) {
        const habilidadesFaltantesResultado = `
     Para a vaga da ${vaga.empresa}, faltam:\n${habilidadesFaltantes.map(habilidade => `     - ${habilidade}`).join("\n")}
     `
    resultadosAnalise.push(habilidadesFaltantesResultado);

     }
  }
  console.log(resultadosAnalise.join("\n\n"));
  const {vaga, compatibilidade} = encontrarVagaComMaiorCompatibilidade(candidato, vagasCarregadas);
  const vagaMaisCompatívelTexto = `
  Vaga mais compatível:
  ${vaga.empresa} - ${vaga.cargo}
  Compatibilidade: ${compatibilidade.toFixed(2)}%
  `
  console.log(`\n${vagaMaisCompatívelTexto}`);
  const recomendacaoEstudo = gerarRecomendacaoEstudo(candidato, vaga);
  console.log(`\n${recomendacaoEstudo}`);
  finalizarAnalise(candidato.nome, exibirMensagemFinal, totalAnalises);
}
iniciarSistema();

function criarContadorDeAnalises() {
  let total = 0;

  return function () {
    total++;
    return total;
  };
  }
  function finalizarAnalise(nomeCandidato, callback, totalAnalises) {
    console.log("Total de análises realizadas: " + totalAnalises);
    console.log("Análise finalizada.");
    callback(nomeCandidato);
}