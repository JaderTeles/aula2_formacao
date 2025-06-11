const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPrincipal = document.querySelector(".caixa-perguntas");
const caixaPrincipal = document.querySelector(".caixa-alternativas");
const caixaPrincipal = document.querySelector(".caixa-resultado");

const perguntas = [
    {
    enunciado:"Texto enunciado", 
    alternativas: [
        { texto: "Texto 1",
          afirmacao: "Afirmacao1"  
        },
        { texto: "Texto 2",
          afirmacao: "Afirmacao2"
        }

    ]
}

];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas()
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click",function() {
                atual++;
                mostraPergunta();    })
        caixaAlternativa.appendChild(botaoAlternativa);
    }
}