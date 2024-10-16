const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceObjects = prices.map((value): Record<string, number> => {
  return { price: value, salePrice: value / 2 };
});

console.log('Price objects: ', priceObjects);

const formattedPrices = prices.map((value): string => {
  return `$${value.toFixed(2)}`;
});

console.log('Formatted prices: ', formattedPrices);
