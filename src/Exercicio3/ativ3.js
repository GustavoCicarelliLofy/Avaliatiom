function calcular() {
    let peso = document.getElementById("peso").value;
    let distancia = document.getElementById("distancia").value;
    let resposta = document.getElementById("result");
  
    if (peso < 0 || distancia < 0 || peso == "" || distancia == "") {
      resposta.textContent = "Valores inválidos!";
      return;
    }
  
    let frete = (peso * 0.5) + (distancia * 0.1);
  
    resposta.textContent = "Frete: R$ " + frete.toFixed(2);
  }
  
  document.getElementById("calculafret").onclick = calcular;