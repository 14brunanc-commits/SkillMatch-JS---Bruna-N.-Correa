// dados.js
// Responsável por buscar dados externos e persistência


import { Vaga } from "./motor.js";



// Caminho do arquivo JSON
const caminhoVagas = "./assets/dados/vagas.json";





// RF13 - Fetch + async/await + try/catch + response.ok

export async function carregarVagas() {


    try {


        const resposta = await fetch(caminhoVagas);



        // Verifica se a resposta da rede deu certo
        if (!resposta.ok) {

            throw new Error(
                "Erro ao carregar o catálogo de vagas."
            );

        }



        const dados = await resposta.json();




        // RF07 + RF13
        // Transformando objetos JSON em instâncias da classe Vaga

        const vagas = dados.map(vaga => {


            return new Vaga(

                vaga.id,

                vaga.empresa,

                vaga.cargo,

                vaga.requisitos,

                vaga.salario,

                vaga.modalidade

            );


        });



        return vagas;



    } catch (erro) {


        console.error(
            "Erro:",
            erro
        );


        return [];

    }


}









// RF14 - salvar perfil no localStorage

export function salvarPerfil(perfil) {


    localStorage.setItem(

        "perfilSkillMatch",

        JSON.stringify(perfil)

    );


}









// RF14 - recuperar perfil salvo

export function carregarPerfil() {


    const perfilSalvo =
        localStorage.getItem(
            "perfilSkillMatch"
        );



    // Primeira visita do usuário

    if (!perfilSalvo) {


        return null;


    }



    return JSON.parse(perfilSalvo);



}
