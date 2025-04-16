let nome = 'Caio';
let esposa = 'Nicole';
let filha = 'Helena';

console.log(nome, 'nasceu em 2001');
console.log('Em 2024', nome, 'conheceu', esposa);
console.log(nome, 'casou-se com', esposa, 'em 2026');
console.log(esposa, 'teve', 1, 'filha com', nome, 'em 2030');
console.log('a filha de', nome, 'se chama', filha); 

/*
* Nao pode criar variavel com palavras reservadas pela linguagem, como let console, let let, etc. ****************************************************************
* A variavel nao pode comecar com numeros, embora possa conter numeros no nome ****************************************************************
* Os nomes precisam conter significados ****************************************************************
* Os nomes nao podem conter espaco ou hifen. ****************************************************************
* Case-sensitive: letra MAIUSCULA ou letra MINUSCULA fazem diferenca. ****************************************************************
* Nao podemos redeclarar variaveis com let, contudo, podemos modificar seu valor SEM O USO DE LET ****************************************************************
* Nao utilizar var, utilizar sempre let ****************************************************************
*/

let nomeCliente = 'Joao';
let nomecliente = 'Carlos';

console.log(nomecliente);
console.log(nomeCliente);