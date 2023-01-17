var nomecompleto, idade, linguagem;

function registro(){
    nomecompleto = document.getElementById("nome_completo").value;
    idade = document.getElementById("idade").value;
    linguagem = document.getElementById("linguagem").value;
}

function logSubmit(event) {
    registro();
    document.querySelector("#form").classList.add('hide');
    document.querySelector("#fieldset").classList.remove('hide');
    document.querySelector("#div").classList.add('segundapagina');
    log.textContent = "Olá " + nomecompleto + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!";
    pergunta.textContent = "Você gosta de estudar " + linguagem + "?";
    event.preventDefault();
  }
  
const form = document.getElementById('form');
const log = document.getElementById('log');
const pergunta = document.getElementById('pergunta');
form.addEventListener('submit', logSubmit);

function textoRadio(){
    var radio1 = document.getElementById('radio-sim');
    var radio2 = document.getElementById('radio-nao');

    if(radio1.checked){
        logradio.textContent = "Muito bom! Continue estudando e você terá muito sucesso."
    }
    if(radio2.checked){
        logradio.textContent = "Ahh que pena... Já tentou aprender outras linguagens?"
    }
}

const fieldset = document.getElementById('fieldset');
fieldset.addEventListener('change', textoRadio);
const logradio = document.getElementById('logradio');
