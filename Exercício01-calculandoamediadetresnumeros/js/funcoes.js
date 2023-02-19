//EXERCÍCIOS COM FUNÇÕES

//1°Faça uma função que receba três números e imprima a média deles.

function resultado(a,b,c){
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;
var media = (Number(a) + Number(b) + Number(c)) / 3 ;
alert(`A média desses três valores é:${media}`);
console.log("A média desses três valores é ",media);
} 


