export function ToAmerican(decimal) {
  let moneyline, prefix;
  decimal < 2.0
    ? (moneyline = (-100 / (decimal - 1)).toFixed(0))
    : (moneyline = ((decimal - 1) * 100).toFixed(0));
  prefix = moneyline > 0 ? "+" : "";
  return `${prefix}${moneyline}`;
}
