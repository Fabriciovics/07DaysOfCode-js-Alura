let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionar = "sim";  
while(adicionar != "não"){
    adicionar = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionar != "sim" && adicionar != "não") { 
	alert(`Operação não reconhecida!`);
        adicionar = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionar === "não"){  
        break;
    }
	
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticínios'){
        laticinios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);