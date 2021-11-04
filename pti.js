var resposta;

function tamoJunto(){

var precoGasolina = parseFloat(prompt('Preço da Gasolina: '));
var precoEtanol = parseFloat(prompt('Preço do Etanol: '));;

var media = parseFloat(precoEtanol / precoGasolina);

console.log((media.toFixed(2)) + '%');

if (media <= 0.69) {
  console.log("Vale a pena colocar Etanol");
}
if (media == 0.7) {
  console.log("Tanto faz entre colocar Gasolina e Etanol");
}
if (media >= 0.71) {
  console.log("Vale a pena colocar Gasolina");
}
resposta = prompt('Deseja verificar novamente? Responda com sim ou não')
}

tamoJunto();


while(resposta == 'sim'){
  tamoJunto();  
} 

  alert('Obrigado e volte sempre!')

  /* var precoGasolina = 6.2;
var precoEtanol = 6.99;

var media = parseFloat(precoEtanol / precoGasolina);

console.log(media);

if (media <= 0.69) {
  console.log("Vale a pena colocar Etanol");
  return;
}
if (media < 0.7) {
  console.log("Tanto faz");
  return;
}
if (media >= 0.71) {
  console.log("Vale a pena colocar Gasolina");
  return;
} */

