class VoidException implements Exception {
  String error() => 'Não pode estar vazio!';

  @override
  String toString() => error();
}
