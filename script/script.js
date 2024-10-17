const numbers = []
for (i = 0; i < 76; i++) {
  numbers.push(i + 1)
}

const extrNum = []

const table = document.getElementById("table")

const generateTable = function () {
  let j = 0
  for (i = 0; i < 8; i++) {
    const newRow = document.createElement("tr")
    for (let x = 0; x < 10; x++) {
      const newTd = document.createElement("td")
      if (j < numbers.length) {
        newTd.textContent = numbers[j]
        newTd.id = "number" + numbers[j].toString()
        newRow.appendChild(newTd)
      }
      j = j + 1
    }
    table.appendChild(newRow)
  }
}

const genTable = generateTable()

const buttonClick = function () {
  const button = document.getElementById("extract")
  button.addEventListener("click", function () {
    n = numbers[Math.floor(Math.random() * numbers.length)]
    console.log(n)
    numbers.splice(n, 1)
    extrNum.push(n)
    document.getElementById("extractedNumbers").textContent = extrNum.join(", ")
    document.getElementById("number" + n).style.backgroundColor = "#0D1117"
  })
}
const rng = buttonClick()
