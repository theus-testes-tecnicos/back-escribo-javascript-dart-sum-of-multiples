#!/bin/bash

opcoes=("JavaScript" "Dart" "Typescript")
opcao_selecionada=0

while true; do
  clear

  echo "Escolha a linguagem:"
  for i in "${!opcoes[@]}"; do
    if [ $i -eq $opcao_selecionada ]; then
      echo "> $((i+1)) - ${opcoes[i]}"
    else
      echo "  $((i+1)) - ${opcoes[i]}"
    fi
  done

  read -rsn1 input

  case $input in
    "A")
      opcao_selecionada=$((opcao_selecionada-1))
      ;;
    "B")
      opcao_selecionada=$((opcao_selecionada+1))
      ;;
    "C")
      opcao_selecionada=$((opcao_selecionada+2))
      ;;
    "")
      case $opcao_selecionada in
        0)
          cd javascript
          npm install
          npm run start
          ;;
        1)
          cd dart
          dart pub get
          dart run
          ;;
        2)
          cd typescript
          npm install
          npm run start
          ;;
      esac
      break
      ;;
  esac

  opcao_selecionada=$((opcao_selecionada<0 ? 0 : (opcao_selecionada>=${#opcoes[@]} ? ${#opcoes[@]}-1 : opcao_selecionada)))
done
