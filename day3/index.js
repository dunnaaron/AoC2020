const fs = require('fs');

let slopeMap = fs
.readFileSync('day3/input.txt', { encoding: 'utf-8' })
.split('\n')
.map(line => line.split(''))

const countTrees = () => {
  let treeCount = 0
  let x = 0
  let y = 0

  while (y < slopeMap.length) {
    if (slopeMap[y][x] === "#") { treeCount++ }

    x = (x + 3) % slopeMap[0].length
    y += 1
  }

  return treeCount
}

console.log(countTrees(slopeMap))
