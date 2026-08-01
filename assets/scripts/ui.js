// ui.js
// Responsável somente pela tela (DOM)



// Limpa mensagens antigas

export function limparTela() {


    document.getElementById(
        "cards-vagas"
    ).innerHTML = "";


    document.getElementById(
        "vaga-destaque"
    ).innerHTML = "";


    document.getElementById(
        "recomendacao-estudo"
    ).innerHTML = "";


}








// RF11
// Criar cards dinamicamente usando DOM

export function criarCards(resultados) {


    const container =
        document.getElementById(
            "cards-vagas"
        );



    container.innerHTML = "";





    resultados.forEach(resultado => {



        const card =
            document.createElement(
                "article"
            );



        card.classList.add(
            "card"
        );





        const titulo =
            document.createElement(
                "h3"
            );


        titulo.textContent =
            resultado.vaga.empresa;





        const cargo =
            document.createElement(
                "p"
            );


        cargo.innerHTML =
        `<strong>Cargo:</strong> 
        ${resultado.vaga.cargo}`;







        const compatibilidade =
            document.createElement(
                "p"
            );


        compatibilidade.innerHTML =
        `<strong>Compatibilidade:</strong>
        ${resultado.percentual.toFixed(2)}%`;







        const classificacao =
            document.createElement(
                "p"
            );


        classificacao.innerHTML =
        `<strong>Classificação:</strong>
        ${resultado.classificacao}`;







        const encontrados =
            document.createElement(
                "p"
            );


        encontrados.innerHTML =
        `<strong>Habilidades encontradas:</strong>
        ${
            resultado.encontrados.join(", ")
        }`;








        const faltantes =
            document.createElement(
                "p"
            );


        faltantes.innerHTML =
        `<strong>Habilidades faltantes:</strong>
        ${
            resultado.faltantes.length > 0
            ?
            resultado.faltantes.join(", ")
            :
            "Nenhuma"
        }`;








        card.appendChild(titulo);

        card.appendChild(cargo);

        card.appendChild(compatibilidade);

        card.appendChild(classificacao);

        card.appendChild(encontrados);

        card.appendChild(faltantes);






        container.appendChild(card);



    });



}









// Mostrar melhor vaga

export function mostrarMelhorVaga(resultado) {


    const destaque =
        document.getElementById(
            "vaga-destaque"
        );



    destaque.innerHTML = "";





    const card =
        document.createElement(
            "article"
        );



    card.classList.add(
        "card",
        "destaque"
    );





    card.innerHTML = `

        <h3>
        ⭐ ${resultado.vaga.empresa}
        </h3>


        <p>
        Cargo:
        ${resultado.vaga.cargo}
        </p>


        <p>
        Compatibilidade:
        ${resultado.percentual.toFixed(2)}%
        </p>


    `;



    destaque.appendChild(card);



}









// Mostrar recomendação de estudo

export function mostrarRecomendacao(texto) {


    const area =
        document.getElementById(
            "recomendacao-estudo"
        );



    area.textContent =
        texto;


}









// Mensagens de erro

export function mostrarMensagem(texto) {


    const mensagem =
        document.getElementById(
            "mensagem-erro"
        );


    mensagem.textContent =
        texto;


}









// Estado carregando

export function mostrarCarregamento(texto) {


    const loading =
        document.getElementById(
            "loading"
        );



    loading.textContent =
        texto;


}

export function limparCarregamento(){

    document.getElementById(
        "loading"
    ).textContent = "";

}