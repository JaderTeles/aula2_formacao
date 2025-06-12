const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPrincipal = document.querySelector(".caixa-perguntas");
const caixaPrincipal = document.querySelector(".caixa-alternativas");
const caixaPrincipal = document.querySelector(".caixa-resultado");

const perguntas = [
    {
    enunciado:"Texto1 enunciado", 
        alternativas: [
            "Isso é 1a alternativa",
            "Isso é 1b alternativa"
        ]
    },
    {
        enunciado: "Texto2 enunciado",
        alternativas: [
            "Isso é 2a alternativa",
            "Isso é 2b alternativa",
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas()
}
mostraPergunta();


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