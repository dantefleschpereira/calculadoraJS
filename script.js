function calculadora() {

  let n1, n2, resposta

  const op = Number(prompt('Calculadora JS\nEscolha uma operação:\n1-Soma\n2-Subtração\n3-Divisão\n4-Multiplicação\n5-Potenciação'))

  if (!op || op < 1 || op > 5) {
    alert('Opção inválida! Tente novamente!')
    calculadora()
  } else {
    n1 = Number(prompt('Digite o primeiro número: '))
    n2 = Number(prompt('Digite o segundo número: '))

    switch (op) {
      case 1: soma()
        break;
      case 2: subtracao()
        break;
      case 3: divisao()
        break;
      case 4: multiplicacao()
        break;
      case 5: potenciacao()
    }

    function soma() {
      resposta = n1 + n2
      alert(`${n1} + ${n2} = ${resposta}`)
      calculadora()
    }

    function subtracao() {
      resposta = n1 - n2
      alert(`${n1} - ${n2} = ${resposta}`)
      calculadora()
    }

    function divisao() {
      resposta = n1 / n2
      alert(`${n1} / ${n2} = ${resposta}`)
      calculadora()
    }

    function multiplicacao() {
      resposta = n1 * n2
      alert(`${n1} * ${n2} = ${resposta}`)
      calculadora()
    }

    function potenciacao() {
      resposta = n1 ** n2
      alert(`${n1} elevado à ${n2}ª potência é ${resposta}`)
      calculadora()
    }

  }
}
calculadora()
