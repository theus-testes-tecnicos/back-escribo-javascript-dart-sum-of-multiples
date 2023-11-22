String colorText(int color, String text) {
  return '\x1B[${color}m$text\x1B[0m';
}

/* 
  Cor vermelha: 31
  Cor verde: 32
  Cor amarela: 33
  Cor azul: 34
  Cor magenta: 35
  Cor ciano: 36
  Cor branca: 37
*/
