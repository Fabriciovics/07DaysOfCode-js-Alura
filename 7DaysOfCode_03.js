const nome = prompt("Qual seu nome? ");
const area = prompt("Voce quer seguir para área de Front-End ou seguir para a área de Back-End? ");

if (area === "Front-End") {
  linguagem = prompt("Você quer aprender React ou Vue?");
}
else if (area === "Back-End") {
  linguagem = prompt("Você quer aprender C#  ou Java?");
}
else {
  alert("Área invalida");
}

const escolha = prompt("Digite 1 para seguir se especializando na área de " + area + " ou 2 para seguir se desenvolvendo e se tornar Fullstack");

if (escolha === 1) {
  alert("Continue estudando " + linguagem + " para avançar na área de " + area);
}
if (escolha === 2) {
  alert("Voce precisa estudar outras linguagens para se tornar um desenvolvedor Fullstack");
}

let mensagem = prompt("Tem mais alguma tecnologia que você gostaria de aprender? caso tenha digite 'sim'.");
while (mensagem === "sim") {
  let tecnologia = prompt("Qual?");
  alert(`${tecnologia} é excelente!`)
  mensagem = prompt("Tem mais alguma tecnologia que você gostaria de aprender? caso tenha digite 'sim'.");
}

alert(`${nome} , obrigado por sua participação!`);