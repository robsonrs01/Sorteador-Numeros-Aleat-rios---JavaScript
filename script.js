
var numeroAleatorio = Math.random();

var numeroInteiroAleatorio = Math.floor(Math.random() * 115) + 1;

console.log(numeroAleatorio)
console.log(numeroInteiroAleatorio)



function generateNumber(){
   

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;


    alert(result)
}