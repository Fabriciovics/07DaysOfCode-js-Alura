const nome = prompt("Digite seu nome");
const idade = prompt("Digite sua idade");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;

alert(msg);

const pergunta = prompt("Você gosta de estudar " + linguagem + " ? Responda com o número 1 para SIM ou 2 para NÃO.");

if (pergunta == '1') {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else {
  ñ
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
