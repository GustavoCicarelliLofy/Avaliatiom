function calcularLucro() {
  let custo = Number(document.getElementById("custo").value);
  let percentual = Number(document.getElementById("precoVenda").value);
  let lucro = document.getElementById("lucro");
  let texto = document.getElementById("texto");


  if (custo < 0 || percentual < 0 || isNaN(custo) || isNaN(percentual)) {
    lucro.textContent = "Lucro: R$0.00";
    texto.textContent = "Digite valores válidos";
    return;
  }
  let valorLucro = custo * (percentual / 100);
  let precoFinal = custo + valorLucro;
  precoFinal = precoFinal.toFixed(2);
  lucro.textContent = `Preço final: R$${precoFinal}`;

  texto.textContent =
    `Um produto com custo de R$${custo} teve ${percentual}% de lucro e será vendido por R$${precoFinal}`;
}