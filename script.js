

function calcular(event){
event.preventDefault();

let alcoolInput = document.getElementById("alcool").value;
let gasolinaInput = document.getElementById ("gasolina").value;
let contentResult = document.getElementById("content-result");
let textResult = document.getElementById ("text-result");

let calculo = (alcoolInput /gasolinaInput);

let gasolinaSpan = document.getElementById("gasolina-result");
let alcoolSpan = document.getElementById("alcool-result");
if(calculo < 0.7){
textResult.innerHTML = "compensa usar alcool";

}else{
textResult.innerHTML = " compensa usar gasolina";
}

gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;
alcoolSpan.innerHTML = "Alcool R$" + alcoolInput;

contentResult.classList.remove("hide")

}