const { colorText } = require("./colors.js");

const welcomeText = colorText("Bem-vindo(a) a soma dos múltiplos", 32, {
  bold: true,
});

const instructions = [
  colorText("===================================", 36),
  colorText("Me chamo TH,", 36),
  colorText("Primeiramente você digitará um número inteiro e positivo.", 36),
  colorText("Eu vou calcular a soma de todos os números divisíveis por", 36),
  colorText("3 ou 5 que sejam inferiores ao número passado.", 36),
  colorText("Vamos começar?", 36),
  colorText("===================================", 36),
];

module.exports = { welcomeText, instructions };
