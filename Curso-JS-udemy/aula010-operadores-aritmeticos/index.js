/*
******************************** OPERADORES ARTIMETICOS ********************************
* + ADICAO / CONCATENACAO ********************************
* - SUBTRACAO ********************************
* / DIVISAO ********************************
* * MULTIPLICACAO ********************************
* ** POTENCIACAO ********************************
* % RESTO DA DIVISAO ********************************
*/

let num1 = 5;
let num2 = 3;
let num3 = "2";
console.log(`SOMA - a soma de ${num1} e ${num2} eh ${num1 + num2}`);
console.log(`CONCATENACAO - a concatenacao de ${num1} e ${num3} eh ${num1 + num3}`); //EXEMPLO DE CONCATENACAO

//************************************************************************************************
// SUBTRACAO
num1 = 2;
num2 = 2;
console.log(`SUBTRACAO - o resultado de ${num1} menos ${num2} eh igual a ${num1 - num2}`);

//************************************************************************************************
// DIVISAO
num1 = 500;
num2 = 5;
console.log(`DIVISAO - o resultado de ${num1} divido por ${num2} eh igual a ${num1 / num2}`)

//************************************************************************************************
// MULTIPLICACAO
num1 = 10;
num2 = 10;
console.log(`MULTIPLICACAO - o resultado de ${num1} multiplicado por ${num2} eh igual a ${num1 * num2}`)

//************************************************************************************************
// POTENCIACAO
num1 = 5;
num2 = 10;
console.log(`POTENCIACAO - o resultado de ${num1} elevado a ${num2} eh igual a ${num1 ** num2}`)

//************************************************************************************************
// RESTO DA DIVISAO
num1 = 10;
num2 = 3;
console.log(`RESTO DA DIVISAO - o resto da divisao entre ${num1} e ${num2} eh igual a ${num1 % num2}`)

//******************************** PRECEDENCIA, ORDEM DAS OPERACOES ********************************
/*
1. TUDO QUE ESTIVERM EM PARENTESES
2. POTENCIACAO
3. MULTIPLICACAO / DIVISAO / RESTO DA DIVISAO (respeitando a ordem em que foram escritos)
6. ADICAO / SUBTRACAO
*/


/*
* Decremento = --
* Incremento = ++ 
*/
let contador = 1;
contador++; //incremento
++contador; //pre-incremento
contador--; //decremento
--contador; //pre-decremento
console.log(contador);