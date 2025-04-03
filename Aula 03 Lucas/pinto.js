// var combustivel = 'gasolina'

// if (combustivel == "gnv") {
//     alert("O carro é movido à gás");
// }
// else if (combustivel == "gasolina") {
//     alert("O carro é movido à gasolina");
// }
// else if (combustivel == "Alcool") {
//     alert("O carro é movido à Àlcool");
// }
// else {
//     alert("O carro não funciona")
// }


// numero = prompt("Insira um número de 1 a 5")

// if (numero == "1") {
//     alert("Um")
// }

// if (numero == "2") {
//     alert("Dois")
// }

// if (numero == "3") {
//     alert("Três")
// }

// if (numero == "4") {
//     alert("Quatro")
// }

// if (numero == "5") {
//     alert("Cinco")
// }

// else {
//     alert("O número está errado")
// }

// var nome = prompt("Inserir nome");
// var sobrenome = prompt("Inserir sobrenome");

// if ((nome != "") && (sobrenome != "")) {
//  alert("Nome: " + nome + "\nSobrenome: " + sobrenome);
// } else {
//   alert("Erro ao inserir nome e sobrenome");
// }

// var nome = prompt("Inserir nome");
// if ((nome == "ANA") || (nome == "ana") || (nome == "Ana")) { alert("O nome inserido é Ana");
// } else {
//  alert("O nome inserido NÃO é Ana");
// }

// var nome = prompt("Inserir nome");
// var eVazio = nome == "";
// if (!eVazio) {
//     alert("Nome: " + nome);
// } else {
//     alert("Nome é vazio");
// }

var idade = prompt("Inserir idade");
if (idade < 18) {
  alert("É jovem");
}
else if ((idade >= 18) && (idade < 60)) {
  alert("É adulto");
}
else {
  alert("É idoso");
}
