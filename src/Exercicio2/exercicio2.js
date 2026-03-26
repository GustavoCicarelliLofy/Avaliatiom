function calcularDesconto() {
  let valorCompra = Number(document.getElementById("valorCompra").value);
  let valorFinalElem = document.getElementById("valorFinal");
  let mensagemElem = document.getElementById("mensagem");
  if (isNaN(valorCompra) || valorCompra < 0) {
    valorFinalElem.textContent = "Valor final: R$0.00";
    mensagemElem.textContent = "Digite um valor válido!";
    return;
  }
  let valorFinal;
  if (valorCompra <= 100) {
    valorFinal = valorCompra; 
  } else if (valorCompra <= 500) {
    valorFinal = valorCompra * 0.9; 
  } else {
    valorFinal = valorCompra * 0.8; 
  }
  valorFinal = valorFinal.toFixed(2);

  valorFinalElem.textContent = `Valor final: R$${valorFinal}`;
  mensagemElem.textContent = 
    `O valor da compra era R$${valorCompra}, após aplicar o desconto ficou R$${valorFinal}.`;
}