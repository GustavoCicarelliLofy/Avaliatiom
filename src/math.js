function calculateFinalPrice(cost, margin) {
    if (typeof cost !== 'number' || typeof margin !== 'number') {
      throw new Error('Valores devem ser números');
    }
  
    if (cost < 0 || margin < 0) {
      throw new Error('Valores não podem ser negativos');
    }
  
    const finalPrice = cost + (cost * margin / 100);
  
    return Number(finalPrice.toFixed(2));
  }
  
  module.exports = { calculateFinalPrice };