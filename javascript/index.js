const { Console } = require("./src/console.js");
const { welcomeText, instructions, response } = require("./src/texts.js");
const { getMultiples, calculateSumOfMultiples } = require("./src/utils.js");

const main = async () => {
  Console.write(welcomeText, { skipLine: true, quantLines: 2 });
  instructions.forEach((instruction) => Console.write(instruction));

  const value = await Console.readInt("Digite um número: ");
  const multiples = getMultiples(value);
  const result = calculateSumOfMultiples(multiples);
  const textsResponse = response(value, multiples, result);

  textsResponse.forEach((text) => Console.write(text));
};

main();
