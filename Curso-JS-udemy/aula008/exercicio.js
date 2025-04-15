/*
Caio Henriquer Maier de Lara tem 23 anos, pesa 80kg, tem 1.8 de altura e seu IMC eh 
Caio Henrique Maier de Lara nasceu em 2001.
*/
const nome = 'Caio Henrique';
const sobrenome = 'Maier de Lara';
const nomeCompleto = `${nome} ${sobrenome}`;
const idade = 24;
const peso = 80;
const altura = 1.83;
let alturaEmM = altura + "m";
let imc = peso / (altura * altura); // peso / (altura * altura)
let anoNascimento = 2025 - idade;

console.log(`${nomeCompleto} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM} de altura e seu IMC eh ${imc}`);
console.log(`${nomeCompleto} nasceu em ${anoNascimento}.`);