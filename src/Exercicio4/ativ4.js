function calcularLucro() {
    let precoVenda = document.getElementById("precoVenda").value;
    let custoProduto = document.getElementById("custoProduto").value;
    let custosOperacionais = document.getElementById("custosOperacionais").value;
    let resposta = document.getElementById("resultado");
  
    if (precoVenda < 0 || custoProduto < 0 || custosOperacionais < 0 ||
        precoVenda === "" || custoProduto === "" || custosOperacionais === "") {
      resposta.textContent = "Valores inválidos!";
      return;
    }
    let lucro = precoVenda - custoProduto - custosOperacionais;
  
    resposta.textContent = "Lucro Líquido: R$ " + Number(lucro).toFixed(2);
  }
  document.getElementById("calcular").onclick = calcularLucro;