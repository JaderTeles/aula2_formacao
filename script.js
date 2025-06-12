const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPrincipal = document.querySelector(".caixa-perguntas");
const caixaPrincipal = document.querySelector(".caixa-alternativas");
const caixaPrincipal = document.querySelector(".caixa-resultado");

const perguntas = [
    {
    enunciado:"Texto1 enunciado", 
        alternativas: [
            {texto: "Isso é 1a alternativa", "Isso é 1b alternativa"},
            {texto: "Isso é 2a alternativa", "Isso é 2b alternativa"}
            
            
        ]
    },
    {
        enunciado: "Texto2 enunciado",
        alternativas: [
            {texto: "Isso é 5a alternativa", "Isso é 5b alternativa"},
            {texto: "Isso é 6a alternativa", "Isso é 6b alternativa"}
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

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        // botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click",function() {
                atual++;
                mostraPergunta();    })
        caixaAlternativa.appendChild(botaoAlternativa);
    }
} 

mostraPergunta();