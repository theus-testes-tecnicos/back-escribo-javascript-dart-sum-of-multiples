import 'package:dart/console.dart';
import 'package:dart/texts.dart';
import 'package:dart/time.dart';
import 'package:dart/utils.dart';

void main(List<String> arguments) async {
  Console.write(welcomeText, quantLines: 2);

  for (String instruction in instructions) {
    await Time.sleep(1);
    Console.write(instruction);
  }

  String value = Console.readInt("Digite um número: ");
  List<int> multiples = getMultiples(value);
  int result = calculateSumOfMultiples(multiples);
  List<String> textsResponse = response(value, multiples, result);

  for (String text in textsResponse) {
    Console.write(text);
    await Time.sleep(1);
  }
}
