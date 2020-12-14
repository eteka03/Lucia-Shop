export const formatPrice = ({ amount, quantity, currency }) => {
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  });

  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  amount = zeroDecimalCurrency ? amount : amount / 100;

  const total = (quantity * amount).toFixed(2);

  return numberFormat.format(total);
};

export const formatTotalPrice = (total, currency) => {
  const numberFormat = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(total.toFixed(2));
};
