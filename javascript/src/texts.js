const { colorText } = require("./colors.js");

const welcomeText = colorText("Bem-vindo(a) a soma dos múltiplos!", 32, {
  bold: true,
});

const instructions = [
  colorText("==========================================================", 36),
  colorText("Me chamo TH,", 36),
  colorText("Primeiramente você digitará um número inteiro e positivo.", 36),
  colorText("Eu vou calcular a soma de todos os números divisíveis por", 36),
  colorText("3 ou 5 que sejam inferiores ao número passado.", 36),
  colorText("==========================================================", 36),
  colorText("", 36),
  colorText("Vamos começar?", 0),
];

const response = (value, multiples, result) => {
  return [
    colorText("", 32),
    colorText("======================================================", 32),
    colorText("Muito bem!", 32),
    colorText(
      `Foi calculado aqui que os números que são abaixo de ${value}`,
      32
    ),
    colorText(`e que são divisiveis por 3 ou 5 são:`, 32),
    colorText("", 32),
    colorText(`{${multiples.join(", ")}}.`, 33),
    colorText("", 32),
    colorText(
      `E o resultado da soma destes números é: ${colorText(result, 33)}.`,
      32
    ),
    colorText("======================================================", 32),
    colorText("", 32),
    colorText("Foi muito divertido ter você aqui.", 32),
    colorText("Até a próxima!", 32),
    colorText("", 32),
  ];
};

module.exports = { welcomeText, instructions, response };
