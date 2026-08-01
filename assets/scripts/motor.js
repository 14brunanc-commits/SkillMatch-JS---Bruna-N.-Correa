// motor.js
// Responsável pelas regras de negócio do SkillMatch.js



// ===============================
// CLASSE CANDIDATO
// ===============================


export class Candidato {


    constructor(nome, area, habilidades, experienciaMeses) {


        this.nome = nome;

        this.area = area;

        this.habilidades = habilidades;

        this.experienciaMeses = experienciaMeses;


    }


}







// ===============================
// CLASSE VAGA
// ===============================


export class Vaga {


    constructor(id, empresa, cargo, requisitos, salario, modalidade) {


        this.id = id;

        this.empresa = empresa;

        this.cargo = cargo;

        this.requisitos = requisitos;

        this.salario = salario;

        this.modalidade = modalidade;


    }




    calcularCompatibilidade(candidato) {


        const encontrados = this.requisitos.filter(

            requisito =>

            candidato.habilidades.some(

                habilidade =>

                habilidade.toLowerCase() ===
                requisito.toLowerCase()

            )

        );



        return (

            encontrados.length /
            this.requisitos.length

        ) * 100;


    }





    getHabilidadesFaltantes(candidato) {


        return this.requisitos.filter(

            requisito =>

            !candidato.habilidades.some(

                habilidade =>

                habilidade.toLowerCase() ===
                requisito.toLowerCase()

            )

        );


    }



    exibirResumo() {


        return `${this.cargo} na empresa ${this.empresa}`;


    }



}








// ===============================
// HERANÇA - RF07
// ===============================


// VagaFrontEnd herda características de Vaga.
// Acrescenta uma regra específica:
// tecnologias de front-end recebem destaque.


export class VagaFrontEnd extends Vaga {



    constructor(
        id,
        empresa,
        cargo,
        requisitos,
        salario,
        modalidade,
        stack
    ) {


        super(
            id,
            empresa,
            cargo,
            requisitos,
            salario,
            modalidade
        );


        this.stack = stack;


    }





    exibirResumo() {


        return `${this.cargo} - Stack: ${this.stack}`;


    }



}









// ===============================
// RF08 - CLOSURE
// ===============================


// Mantém o estado da quantidade de análises
// realizadas durante a sessão.


export function criarContadorAnalises(){


    let quantidade = 0;



    return function(){


        quantidade++;


        return quantidade;


    };


}





export const contadorAnalises =
    criarContadorAnalises();









// ===============================
// RF03
// Cálculo geral de compatibilidade
// ===============================


export function calcularCompatibilidade(candidato, vaga){



    return vaga.calcularCompatibilidade(
        candidato
    );


}









// ===============================
// RF04
// Classificação da compatibilidade
// ===============================


export function classificarCompatibilidade(percentual){



    if(percentual >= 80){


        return "Alta compatibilidade";


    }


    else if(percentual >= 50){


        return "Média compatibilidade";


    }


    else{


        return "Baixa compatibilidade";


    }


}









// ===============================
// RF06
// Processamento das vagas
// map + filter
// ===============================


export function analisarVagas(candidato, vagas){



    contadorAnalises();




    return vagas.map(vaga => {



        const percentual =
            calcularCompatibilidade(
                candidato,
                vaga
            );



        const faltantes =
            vaga.getHabilidadesFaltantes(
                candidato
            );



        const encontrados =
            vaga.requisitos.filter(

                requisito =>

                !faltantes.includes(requisito)

            );



        return {


            vaga,

            percentual,

            classificacao:
                classificarCompatibilidade(
                    percentual
                ),

            encontrados,

            faltantes


        };



    });


}









// ===============================
// RF05
// Melhor vaga
// reduce + find
// ===============================


export function encontrarMelhorVaga(resultados){



    const maior =
        resultados.reduce(

            (anterior, atual) => {


                return atual.percentual >
                anterior.percentual

                ?

                atual

                :

                anterior;


            }

        );



    return maior;



}









// ===============================
// RF05
// Recomendação de estudo
// ===============================


export function gerarRecomendacao(resultado){



    if(
        resultado.faltantes.length === 0
    ){


        return (
            "Parabéns! Você possui todas " +
            "as habilidades necessárias."
        );


    }



    return (

        "Recomendamos estudar: " +

        resultado.faltantes.join(", ")

    );


}









// ===============================
// RF08 - CALLBACK
// ===============================


// Função recebe outra função como parâmetro.


export function executarCallback(callback){



    const mensagem =
        "Análise concluída com sucesso";



    return callback(mensagem);



}
