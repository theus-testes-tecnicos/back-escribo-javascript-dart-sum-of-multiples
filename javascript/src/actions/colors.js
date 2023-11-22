const colorText = (txt, color, opt = { bold: false, underline: false }) => {
  const { bold, underline } = opt;

  let code = "\x1b[";
  bold && (code += "1;");
  underline && (code += "4;");

  code += `${color}m`;

  const text = code + txt + "\x1b[0m";

  return text;
};

module.exports = { colorText };
/*
  Cor preta: 30
  Cor vermelha: 31
  Cor verde: 32
  Cor amarela: 33
  Cor azul: 34
  Cor magenta: 35
  Cor ciano: 36
  Cor branca: 37

  Fundo preto: 40
  Fundo vermelho: 41
  Fundo verde: 42
  Fundo amarelo: 43
  Fundo azul: 44
  Fundo magenta: 45
  Fundo ciano: 46
  Fundo branco: 47
*/
