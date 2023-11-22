import 'package:dart/colors.dart';
import 'dart:io';

import 'package:dart/utils.dart';

class Console {
  static var rl = stdin;

  static write(text, {bool skipLine = true, int quantLines = 1}) {
    if (skipLine) {
      for (var i = 0; i < quantLines; i++) {
        text += "\n";
      }
    }

    stdout.write(text);
  }

  static readInt(question) {
    String value = "";

    ask() {
      stdout.write(question);

      String? answer = rl.readLineSync();
      var text = answer?.trim();

      if (text.toString().isEmpty) {
        var errorText = colorText("Não pode estar vazio!", 31);
        write(errorText);
        ask();
      } else if (!isIntegerMoreThanZero(text!)) {
        var warningText =
            colorText("O número precisa ser um inteiro positivo", 33);
        write(warningText);
        ask();
      } else {
        value = answer!;
      }
    }

    while (value.isEmpty) {
      ask();
    }

    return value;
  }
}
