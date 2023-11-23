import { Console } from "../src/console";
import { welcomeText, instructions, response } from "../src/texts";
import { getMultiples, calculateSumOfMultiples } from "../src/utils";
import { sleep } from "../src/time";

const main = async () => {
  Console.write(welcomeText, { skipLine: true, quantLines: 2 });

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];

    await sleep(1);
    Console.write(instruction);
  }

  const value: string = (await Console.readInt("Digite um número: ")) as string;
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
