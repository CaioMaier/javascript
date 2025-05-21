let umaString = "um \"texto\""; //barra invertida usada como caractere de escape para as aspas duplas
console.log(umaString[3]);
//stings sao indexaveis, ou seja, cada caractere tem um valor index, comecando em 0
//----------------------------------------------------------------------------------------------------

//CONCATENACAO
console.log(umaString.concat(' muito bonito'));
console.log(umaString + ' muito bonito');
console.log(`${umaString} muito bonito`);


//----------------------------------------------
console.log(umaString.indexOf('um')); 