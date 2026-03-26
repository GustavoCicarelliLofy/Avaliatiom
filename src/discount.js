function calculateDiscount(value) {

  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error('Valor deve ser numérico');
  }

  if (value < 0) {
    throw new Error('Valor não pode ser negativo');
  }

  let finalValue;

  if (value <= 100) {
    finalValue = value;
  } else if (value <= 500) {
    finalValue = value - (value * 0.10);
  } else {
    finalValue = value - (value * 0.20);
  }

  return Number(finalValue.toFixed(2));
}

module.exports = { calculateDiscount };