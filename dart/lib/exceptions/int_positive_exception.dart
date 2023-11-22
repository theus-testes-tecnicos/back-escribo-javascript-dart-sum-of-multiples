class IntPositiveException implements Exception {
  String error() => 'O valor informado deve ser um inteiro positivo!';

  @override
  String toString() => error();
}
