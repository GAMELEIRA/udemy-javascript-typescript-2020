let umaString = "Um \" texto \" "

console.log(umaString);

console.log(umaString.charAt(4)); //BUSCA PELO INDICE

console.log(umaString.charCodeAt(6)); //RETORNA O CODIGO DA LETRA NA TABELA ASCII

console.log(umaString.concat("em", " ", "um"))

console.log(umaString.indexOf("texto")) //RETORNA O INDICE QUE INICIA O TEXTO PROCURADO

console.log(umaString.indexOf("texto", 3)) //RETORNA O INDICE QUE INICIA O TEXTO PROCURADO A PARTIR DE 3

console.log(umaString.lastIndexOf('o', 3))

console.log(umaString.match(/[a-z]/g));

console.log(umaString.search(/[a-z]/g));

console.log(umaString.replace("Um", "GamesGames")); //SUBSTITUIR POR

console.log(umaString.length); //RETORNA O TAMANHO

console.log(umaString.slice(2, 5)); //RECORTA A STRING

console.log(umaString.substring(1, 3));

console.log(umaString.split(2));

console.log(umaString.toLocaleLowerCase());

console.log(umaString.toLocaleUpperCase());