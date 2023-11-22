const { colorText } = require("./colors");
const { isIntegerMoreThanZero } = require("./utils");
const { stdout, stdin } = require("process");
const readline = require("readline");

class Console {
  static rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  static write = (text, opt = { skipLine: true, quantLines: 1 }) => {
    const { quantLines, skipLine } = opt;

    if (skipLine) {
      for (let i = 0; i < quantLines; i++) {
        text += "\n";
      }
    }

    stdout.write(text);
  };

  static readInt = (question) => {
    return new Promise((resolve) => {
      const ask = () => {
        this.rl.question(question, (answer) => {
          const text = answer.trim();

          if (text === "") {
            const errorText = colorText("Não pode estar vazio!", 31, {
              bold: true,
            });

            this.write(errorText);
            ask();
          } else if (!isIntegerMoreThanZero(text)) {
            const warningText = colorText(
              "O número precisa ser um inteiro positivo",
              33,
              {
                bold: true,
              }
            );

            this.write(warningText);
            ask();
          } else {
            this.rl.close();
            resolve(answer);
          }
        });
      };

      ask();
    });
  };
}

module.exports = { Console };
