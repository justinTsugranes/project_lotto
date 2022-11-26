const drawBtn = document.getElementById('draw')
const winningNumbers = document.getElementById('winning-numbers')

// on click, call getwinningnumbershtml and set return to winning numbers inner html
drawBtn.addEventListener(
  'click',
  () => (winningNumbers.innerHTML = getWinningNumbersHtml()),
)

// create empty array
// generate 6 random numbers and add to array
// return the new array values
function getLottoNumbers() {
  const winningNums = []
  for (let i = 0; i < 6; i++) {
    winningNums.push(Math.round(Math.random() * 100))
  }
  return winningNums
}

// map over the winningnumbers returned from getlottonumbers
// add each num to its own div
// use .join to remove commons from return
function getWinningNumbersHtml() {
  return getLottoNumbers()
    .map((num) => `<div class="number">${num}</div>`)
    .join('')
}
