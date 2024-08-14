const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você começa um novo projeto de programação, qual é a sua abordagem inicial?",
        alternativas: [
            {
                texto: "Gosto de planejar detalhadamente antes de começar a codificar.",
                afirmacao: "<b>Organização</b> é uma característica forte sua, valorizando o planejamento detalhado."
            },
            {
                texto: "Prefiro começar a codificar logo e ajustar o plano conforme avanço.",
                afirmacao: "Você se destaca pela <b>dinamismo</b>, gostando de aprender e ajustar durante o processo."
            }
        ]
    },
    // (outras perguntas omitidas para brevidade) 
];

let atual = 0;

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(pergunta){
    for(const alternativa of pergunta.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada());
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(){
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Obrigado por participar!";
    textoResultado.innerHTML = "Esta analise foi feita minusciosamente para dizer, Parabens! independente do que voce faça no codigo voce é um programador, orgulhe-se disso.";
    caixaAlternativas.innerHTML = "";
}

// Início do questionário
mostraPergunta();