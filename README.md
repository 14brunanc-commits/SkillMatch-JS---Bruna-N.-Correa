# SkillMatch.js 🚀

## Plataforma de compatibilidade entre candidatos e vagas Front-End


## 📌 Sobre o projeto

O SkillMatch.js é uma aplicação web desenvolvida para auxiliar candidatos da área de tecnologia a identificarem quais vagas possuem maior compatibilidade com suas habilidades.

O sistema recebe as informações do candidato, compara suas habilidades com os requisitos das vagas disponíveis e apresenta:

- percentual de compatibilidade;
- classificação da vaga;
- habilidades encontradas;
- habilidades que precisam ser desenvolvidas;
- recomendação de estudos;
- destaque para a vaga mais compatível.


O projeto é uma evolução do protótipo inicial desenvolvido em JavaScript puro no console, transformando o motor de análise em uma aplicação web completa utilizando HTML, CSS e JavaScript.


---

# 🎯 Objetivo

Criar uma aplicação Front-End capaz de:

- receber informações de um candidato;
- analisar compatibilidade com oportunidades;
- apresentar resultados dinamicamente;
- persistir informações do usuário;
- consumir dados externos utilizando fetch.


---

# 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- DOM API
- Módulos ES (import/export)
- Fetch API
- LocalStorage
- Git e GitHub
- Live Server (VS Code)


---

# ✨ Funcionalidades

## Cadastro do candidato

O usuário informa:

- nome;
- área de atuação;
- habilidades;
- tempo de experiência.


## Análise de compatibilidade

O sistema compara as habilidades do candidato com os requisitos das vagas e calcula:

```

habilidades atendidas / total de requisitos × 100

```


## Classificação das vagas

As vagas são classificadas como:

- Alta compatibilidade (80% - 100%)
- Média compatibilidade (50% - 79%)
- Baixa compatibilidade (0% - 49%)


## Recomendação de estudo

O sistema identifica habilidades faltantes e sugere quais conhecimentos devem ser desenvolvidos.


## Persistência

O perfil do candidato é salvo no navegador utilizando LocalStorage, permitindo recuperar os dados em uma nova visita.


---

# 📂 Estrutura do projeto


```

skillmatch-web/

├── index.html

├── README.md

└── assets/

```
├── img/

│   └── logo.svg

│

├── styles/

│   └── index.style.css

│

├── scripts/

│   ├── main.js

│   ├── motor.js

│   ├── dados.js

│   └── ui.js

│

└── dados/

    └── vagas.json
```

```


---

# 🧩 Organização dos módulos JavaScript


## motor.js

Responsável pelas regras de negócio:

- classes Candidato, Vaga e VagaFrontEnd;
- cálculo de compatibilidade;
- classificação das vagas;
- recomendação de estudo;
- métodos de array;
- callback e closure.


## dados.js

Responsável por:

- carregamento das vagas através de fetch;
- tratamento de erros;
- transformação dos dados JSON em objetos;
- persistência utilizando LocalStorage.


## ui.js

Responsável pela interface:

- criação dinâmica dos cards;
- atualização do DOM;
- mensagens de carregamento;
- exibição da melhor vaga.


## main.js

Responsável pelo fluxo da aplicação:

- integração dos módulos;
- captura dos eventos;
- validação do formulário;
- execução da análise.


---

# ▶️ Como executar o projeto


## Pré-requisitos

- Navegador atualizado;
- VS Code;
- Extensão Live Server instalada.


## Passos


1. Clone o repositório:

```

git clone URL_DO_REPOSITORIO

```


2. Abra a pasta no VS Code.


3. Execute o arquivo `index.html` utilizando o Live Server.


4. Preencha o formulário e realize a análise.


⚠️ O projeto utiliza módulos ES e fetch, portanto deve ser executado através de um servidor local.


---

# 📚 Conceitos aplicados


Durante o desenvolvimento foram utilizados conceitos estudados no Módulo 01:


### JavaScript

- variáveis e escopo;
- condicionais;
- funções;
- arrow functions;
- arrays e métodos;
- objetos;
- classes;
- herança;
- callbacks;
- closures;
- promises;
- async/await.


### HTML/CSS

- HTML semântico;
- acessibilidade;
- SEO básico;
- Flexbox;
- responsividade mobile-first.


### DOM

- eventos;
- criação dinâmica de elementos;
- manipulação de classes.


### Dados

- consumo de JSON;
- Fetch API;
- LocalStorage.


---

# 🚀 Melhorias futuras

Algumas melhorias possíveis:

- adicionar filtro por modalidade de trabalho;
- permitir ordenar vagas por compatibilidade;
- criar modo claro/escuro;
- adicionar integração com uma API real de vagas;
- melhorar o cadastro de habilidades utilizando seleção por categorias.


---

# 🤖 Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento para:

- auxiliar na organização da estrutura do projeto;
- revisar possíveis melhorias;
- ajudar na identificação de erros;
- sugerir implementações compatíveis com os requisitos do projeto.


Todo código gerado foi revisado, testado e adaptado para atender aos conceitos estudados no Módulo 01.


---

# 👩‍💻 Autora

Bruna Correa

Projeto desenvolvido para avaliação do módulo Front-End React T2 - Módulo 01.
