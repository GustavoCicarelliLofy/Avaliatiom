function calcularROI() {
    let investimento = document.getElementById("investimento").value;
    let receita = document.getElementById("receita").value;
    let resultado = document.getElementById("resultado");
  
    investimento = Number(investimento);
    receita = Number(receita);
  
    if (isNaN(investimento) || isNaN(receita) || investimento <= 0 || receita < 0) {
      resultado.textContent = "Valores inválidos!";
      resultado.classList.add("error");
      return;
    }
  
    let roi = ((receita - investimento) / investimento) * 100;
    resultado.classList.remove("error");
    resultado.textContent = `ROI: ${roi.toFixed(2)}%`;
  }
  
  document.getElementById("calcularRoi").onclick = calcularROI;