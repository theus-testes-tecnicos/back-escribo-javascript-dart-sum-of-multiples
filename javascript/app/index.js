const { Console } = require("../src/console.js");
const { welcomeText, instructions, response } = require("../src/texts.js");
const { getMultiples, calculateSumOfMultiples } = require("../src/utils.js");
const { sleep } = require("../src/time.js");

const main = async () => {
  Console.write(welcomeText, { skipLine: true, quantLines: 2 });

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];

    await sleep(1);
    Console.write(instruction);
  }

  const value = await Console.readInt("Digite um número: ");
  const multiples = getMultiples(value);
  const result = calculateSumOfMultiples(multiples);
  const textsResponse = response(value, multiples, result);

  for (let i = 0; i < textsResponse.length; i++) {
    const text = textsResponse[i];

    Console.write(text);
    await sleep(1);
  }
};

main();
