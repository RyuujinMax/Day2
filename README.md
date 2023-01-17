# Exercicio dia 2 do 7DaysOfCode - Javascrypt

> Status do projeto: Finalizado

Resolução do dia 2 do ***7DaysOfCode - Javascrypt pela Alura*** pelo aluno Giovani Fogarolli.

## Exercicio proposto:

1. Pedir ao usuario entrar os seguintes dados:
   + Nome completo
   + Idade
   + Linguagem de programação
   
2. Formular a seguinte resposta com os dados: **"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"**

3. (Opcional) Perguntar ao usuario a seguinte questão **Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.**.
    + Caso a resposta seja sim:  **Muito bom! Continue estudando e você terá muito sucesso.**
    + Caso a resposta seja não:  **Ahh que pena... Já tentou aprender outras linguagens?**

## Solução utilizando HTML/CSS/JS:

1. Primeiro passo selecionei a font Montserrat do fonts.google.com
2. Comecei a criar os dois forms, da parte do exercicio e do Opcional
3. Utilizando o evento **form.addEventListener('submit',);** criei uma função para armazenar os dados em variaveis após o submit ser feito
4. Utilizando o comando **.classList.add/remove** criei uma class chamada **hide{ display: none }** para transicionar para o exercicio opcional

```js
function registro(){
    nomecompleto = document.getElementById("nome_completo").value;
    idade = document.getElementById("idade").value;
    linguagem = document.getElementById("linguagem").value;
}

function logSubmit(event) {
    registro();
    document.querySelector("#form").classList.add('hide');		/// para entrar na segunda pagina
    document.querySelector("#fieldset").classList.remove('hide');	/// para entrar na segunda pagina
    document.querySelector("#div").classList.add('segundapagina');	/// para entrar na segunda pagina
    log.textContent = "Olá " + nomecompleto + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!";
    pergunta.textContent = "Você gosta de estudar " + linguagem + "?";
    event.preventDefault();
  }
  
const form = document.getElementById('form');
const log = document.getElementById('log');
const pergunta = document.getElementById('pergunta');
form.addEventListener('submit', logSubmit);
```


![Primeira pagina](https://i.ibb.co/HCPmTfy/imagem-2023-01-16-223412469.png)

5. No exercicio opcional utilizei o evento novamente porém com o argumento 'change' para um radio **fieldset.addEventListener('change',);**
6. Com isso ao marcar a resposta desejada foi possivel mudar o output apresentado para solucionar o problema proposto

```js
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
```

![Segunda pagina](https://i.ibb.co/dttcGdF/imagem-2023-01-16-223715439.png)

7. Adição de CSS para estilizar o html
