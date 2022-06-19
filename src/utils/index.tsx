export const kFormatter = (num: number, digits: number = 2) => {
  return Math.abs(num) > 999
    ? ((Math.sign(num) * Math.abs(num)) / 1000).toFixed(digits) + "k"
    : (Math.sign(num) * Math.abs(num)).toFixed(digits)
}
export const nFormatter = (num: number, digits: number = 2) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ]
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value
    })
  return item
    ? (num / item.value).toFixed(digits) + item.symbol
    : Number(0).toFixed(digits)
}
