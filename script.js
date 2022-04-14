function calculadora() {

  var n1, n2, resposta

  const opcao = Number(prompt('Calculadora JS\nEscolha uma operação:\n1-Soma\n2-Subtração\n3-Divisão\n4-Multiplicação\n5-Potenciação'))

  n1 = Number(prompt('Digite o primeiro número: '));
  n2 = Number(prompt('Digite o segundo número: '))

  switch (opcao) {
    case 1: soma()
      break;
    case 2: subtracao()
      break;
  }


  function soma() {
    resposta = n1 + n2
    alert(`Soma = ${resposta}`)
  }

}

calculadora();