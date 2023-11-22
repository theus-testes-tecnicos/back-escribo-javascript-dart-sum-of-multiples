const { Console } = require("./src/console.js");
const { welcomeText, instructions } = require("./src/texts.js");

const main = async () => {
  Console.write(welcomeText, { skipLine: true, quantLines: 2 });
  instructions.forEach((instruction) => Console.write(instruction));

  const value = await Console.readInt("Digite um número: ");

  console.log("digitou: ", value);
};

main();
