export function formatMoney(money: string) {
  return `$${money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
}
