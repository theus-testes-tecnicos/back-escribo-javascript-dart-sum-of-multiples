bool isIntegerMoreThanZero(String text) {
  try {
    int numero = int.parse(text);

    return numero > 0;
  } catch (e) {
    return false;
  }
}

List<int> getMultiples(String text) {
  int value = int.parse(text) - 1;

  List<int> result = [];

  while (value > 0) {
    if (value % 3 == 0 || value % 5 == 0) {
      result.insert(0, value);
    }

    value--;
  }

  return result;
}

int calculateSumOfMultiples(List<int> multiplesList) {
  return multiplesList.fold(0, (acc, multiple) => acc + multiple);
}
