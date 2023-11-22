const { stdout, stdin } = require("process");
const { colorText } = require("./src/actions/colors.js");

stdout.write(colorText("Bem-vindo(a) a soma dos múltiplos\n", 33));
stdout.write("Digite um número: ");

stdin.once("data", (data) => {
  const userInput = data.toString().trim();
  console.log(`Você digitou: ${userInput}`);
  process.stdin.destroy();
});
