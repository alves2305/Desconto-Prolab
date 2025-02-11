function calcularPagamento() {
  const valorTotal = Number(document.getElementById("valorTotal").value);
  const valorDinheiro = Number(document.getElementById("valorDinheiro").value);
  const formaPagamento = document.getElementById("formaPagamento").value; // "20" ou "10"

  // Calcula o multiplicador do desconto: 20% de desconto gera 0.8, 10% gera 0.9
  const descontoMultiplicador = 1 - Number(formaPagamento) / 100;

  // Valida os valores
  if (isNaN(valorTotal) || isNaN(valorDinheiro) || valorTotal <= 0) {
    document.getElementById("resul").innerHTML =
      "Por favor, insira valores válidos.";
    return;
  }

  // Fórmula para calcular o valor a ser pago no cartão:
  // A ideia original é aplicar a porcentagem referente ao pagamento em dinheiro (70% do total) e depois aplicar o desconto.
  const valorCartao =
    ((valorTotal * 0.7 - valorDinheiro) / 0.7) * descontoMultiplicador;

  document.getElementById(
    "resul"
  ).innerHTML = `O valor a ser pago no cartão é R$ ${valorCartao.toFixed(2)}`;
}

function conferir() {
  calcularPagamento();
}
