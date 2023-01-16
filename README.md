# Exercicio dia 2 do 7DaysOfCode - Javascrypt

> Status do projeto: Finalizado

Resolução do dia 2 do ***7DaysOfCode - Javascrypt pela Alura*** pelo aluno Giovani Fogarolli.

Exercicio proposto:

1. Pedir ao usuario entrar os seguintes dados:
   + Nome completo
   + Idade
   + Linguagem de programação
   
2. Formular a seguinte resposta com os dados: **"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"**

3. (Opcional) Perguntar ao usuario a seguinte questão **Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.**.
    + Caso a resposta seja sim:  **Muito bom! Continue estudando e você terá muito sucesso.**
    + Caso a resposta seja não:  **Ahh que pena... Já tentou aprender outras linguagens?**

Solução utilizando HTML/CSS/JS:

1. Primeiro passo selecionei a font Montserrat do fonts.google.com
2. Comecei a criar os dois forms, da primeira parte do exercicio e do Opcional
3. Utilizando o evento **form.addEventListener('submit',);** criei uma função para armazenar os dados em variaveis após o submit ser feito
4. Utilizando o comando .classList.add/remove criei uma class chamada hide{ display: none } para transicionar para o exercicio opcional
5. No exercicio opcional utilizei o evento novamente porém com o argumento 'change' para um radio **fieldset.addEventListener('change',);**
6. Com isso ao marcar a resposta desejada foi possivel mudar o output apresentado para solucionar o problema proposto
7. Adição de CSS para estilizar o html
