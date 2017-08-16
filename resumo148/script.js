console.log("helloworld");

//nova variavel:
var inteiro = 10;
console.log(inteiro);
var decimal = 10.0;
console.log(decimal);

var string = "sugestao";
console.log(string);

var xpto = "10"; // exemplo de uma string
console.log(xpto);
var xpto2 = "false";
console.log(xpto2);

// variavel booleana: true or false
var  booleano = true;
console.log(true);

//operaçoes matemáticas

var inteiro1 = 10;
var inteiro2 = 20;
console.log( inteiro1 + inteiro2);
//aparece  30

var string1 = "10";
var string2 = "20";
console.log( string1 + string2);
//aparece 1020

var xpto3 = "10";
var xpto4 = 20;
console.log( xpto3 + xpto4);
//string com valor numérico continuará a ser 1020

console.log( xpto3 + xpto4 + xpto4);
//string com valor numérico continuará a ser 1020
console.log( xpto3 + (xpto4 + xpto4));
//agora sera 1040
console.log(xpto4 + xpto4+ xpto3);
//se primeiro vier a operção numérica , entÂo virá 4010
console.log(string1-string2);
// será -10;, ele fez cast!

var string3 = "hello world";
var string4 = "hello";
console.log( string3 - string4);
//NaN : not a number

var xpto5 = Number(xpto3);
console.log( xpto5);
//reconhece como numero mudando a cor a azul

console.log( xpto3);
//continua a ser string,com a cor preta

var xpto7 = Boolean("true");
console.log(xpto7);
//tornou a minha string em boolean

var xpto10 = "10";
var xpto11 = "11";
var xpto12 = "12";
console.log(xpto10*xpto11*xpto12);

// operaçóes booleanas: && "and"; ||"ou";

console.log(2==4);
//na consola dá false

console.log(2 + 2 == 4);
//true

console.log(2+3 == 4 && false);
//dá false

console.log(2+2 == 4 || false);
// true ou false, pelo menos um true dá true

//cast de false é 0 e cast de true é 1

console.log(2+(2 == 4)); // aqui o false somo 0 a 2
console.log(2 +(2+2 == 4)); // aqui o true somo 1 a 2
console.log(2==2 && (4==4 || 5==2));//dá true

console.log( 2!==2 && 4==4 || 5 == 2);//dá false
//primeiro o "not",depois o 'and" e por fim o "ou"

//criacao de umaarray:
var arr1 = [];
var arr2 = [0,1,2,3,4,5,6,7];
var arr3 = new Array(10); // estou a estanciar o array com 10 posiçoes de memória, dizendo lhe o tamanho do array

console.log(arr1);
console.log(arr2);
console.log(arr3);


// resposta do console.log arr3 = (10) [undefined × 10]
console.log(arr2[7]); //acedi ä posicao 7 do arr2, e devolveu-me o numero 7

var arr4 = [7,6,5,4,3,2,1];
console.log(arr4[3]);// na posicao 3  da arr4 devolveu me o numero 4;

//como se define o tamanho do array:
console.log(arr4.length);//devolve me 7


// push  -  adiciona
console.log(arr4);
console.log(arr4.push(0));  //adicionou mais uma posicao ao arr4eagr este tem 8 elementos
console.log(arr4);
arr4 [0]=0; // em vez de na primeira posicao ser 7,passou a ser 0
console.log(arr4);
console.log(arr4.pop());  // retirou me o ultimo elemento - o 0
console.log(arr4);

console.log(arr4.shift());  // retirou me o primero elemento - o 0
console.log(arr4);

console.log(arr4.splice(2,2));  // retira na posicao 2, dois elementos
console.log(arr4);


//dicionário
//tem um so elemento
var dict1 ={
    "chave": "valor"
}
console.log(dict1);//imprimiu o meu dicionario

//como aceder ao meu elemento valor
console.log(dict1.chave);// devolve me "valor"
//ou
console.log(dict1["chave"]); // a chave é sempre uma string, e devolve me o resultado valor. esta é a maneira mais correcta para aceder a um dicionário

console.log(dict1[0]); // nao dá para aceder , necessário um índice, daí dar undifined

// acrescentar novo valor :

dict1 ["chave2"] = 100;
console.log(dict1);  //aparece    Object {chave: "valor", chave2: 100}

//criação de uma matriz:

var matriz = [[1,2,3] , [4,5,6] , [7,8,9]];

console.log(matriz[1]);
//devovle me a coluna 4,5,6

console.log(matriz[1][1]);// devolve me o número na posiçao 1, o número 5

//posso guardar a primeira coluna numavariavel local:

var local= matriz[1];
console.log(local);

// criaçao de dicionario dentro de dicionario

var dictondict = {
    "outrodict": {
        "chave":"valor"
    }
}
console.log(dictondict);

//incluir coisas dentro do outrodict;
var dictondict = {
    "outrodict": {
        "chave": "banana",
        "dict2": {
            "chave": "morangos"
        }
    ,
    "outrodict1": {
        "chave": "maçã"
        }
    }
}
console.log(dictondict);

//como aceder ao valor morangos:

console.log(dictondict["outrodict"]["dict2"]["chave"]); 

//adicionei nova chave dentro do dict1
dictondict["outrodict"]["dict2"] ["chave1"]= "pera"; 
console.log(dictondict); 

//criar um array com o dicionario lá dentro
var arrayondict = [{"chave":"valor"},dictondict, matriz];

console.log(arrayondict);

//como aceder ano dictonarray



console.log(arrayondict[2][2][2]);




for (var i = 0; i <= 9; i++) {
    console.log("iteracao:" + i);
}
for (var i=9; i>=0;i--){
    console.log("iteracao:"+i);
}

console.log(matriz.length); // devolve me 3: a primeira,asegunda e terceira array, pois tenho 3 arrays(1,2,3),(4,5,6) e (7,8,9)

for(var i=0; i < matriz.length;i++){
    console.log(matriz[i]);
    console.log(matriz[i].length);
    for(var j=0; j < matriz[i].length; j++){
        console.log(matriz[i][j]);
    }
}

//for (var i=0; i < matriz.length;i++){
for(var i in matriz){
    //for(var j=0; j < matriz[i].length; j++){
    for(var j in matriz[i]){
        console.log(matriz[i][j]);
    }
}

//isto é um loop
// while(2==2){
//     console.log("o prof");
// }

