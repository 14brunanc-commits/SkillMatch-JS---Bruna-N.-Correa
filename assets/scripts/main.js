// main.js
// Responsável por controlar o fluxo da aplicação


import { 
    Candidato,
    analisarVagas,
    encontrarMelhorVaga,
    gerarRecomendacao
} from "./motor.js";


import {
    carregarVagas,
    salvarPerfil,
    carregarPerfil
} from "./dados.js";


import {
    criarCards,
    mostrarMelhorVaga,
    mostrarRecomendacao,
    mostrarMensagem,
    mostrarCarregamento,
    limparCarregamento
} from "./ui.js";




// Recupera elementos do HTML

const formulario = document.getElementById(
    "form-candidato"
);






// Quando a página carregar

window.addEventListener(
    "DOMContentLoaded",
    () => {


        const perfilSalvo =
            carregarPerfil();



        if(perfilSalvo){


            document.getElementById("nome").value =
                perfilSalvo.nome;


            document.getElementById("area").value =
                perfilSalvo.area;


            document.getElementById("tempodeexperiencia").value =
                perfilSalvo.experienciaMeses;


            document.getElementById("habilidade").value =
                perfilSalvo.habilidades.join(", ");


        }


    }
);








// Evento do formulário

formulario.addEventListener(
"submit",
async (evento)=>{


    // evita recarregar a página

    evento.preventDefault();




    const nome =
        document.getElementById("nome").value.trim();



    const area =
        document.getElementById("area").value.trim();



    const experiencia =
        Number(
            document.getElementById(
                "tempodeexperiencia"
            ).value
        );



    const habilidadesTexto =
        document.getElementById(
            "habilidade"
        ).value.trim();





    // Validação

    if(
        !nome ||
        !area ||
        !habilidadesTexto
    ){


        mostrarMensagem(
            "Preencha todos os campos obrigatórios."
        );


        return;

    }







    const habilidades =
        habilidadesTexto
        .split(",")
        .map(
            habilidade =>
            habilidade.trim()
        );







    const candidato =
        new Candidato(

            nome,

            area,

            habilidades,

            experiencia

        );







    // salva perfil

    salvarPerfil(candidato);







    // feedback de carregamento

    mostrarCarregamento(
        "Carregando vagas..."
    );







    // busca vagas

    const vagas =
        await carregarVagas();
limparCarregamento();






    if(vagas.length === 0){


        mostrarMensagem(
            "Não foi possível encontrar vagas."
        );


        return;


    }







    // Motor de análise

    const resultados =
        analisarVagas(
            candidato,
            vagas
        );








    // Renderiza cards

    criarCards(
        resultados
    );








    // Melhor vaga

    const melhor =
        encontrarMelhorVaga(
            resultados
        );





    mostrarMelhorVaga(
        melhor
    );






    // Recomendação

    const recomendacao =
        gerarRecomendacao(
            melhor
        );



    mostrarRecomendacao(
        recomendacao
    );



});
