
function randomizeBoard (board) {
  let newBoard = []
  board.forEach(grid => {
    grid.status = Boolean(Math.round(Math.random()))
    newBoard.push(grid)
  })
  return newBoard
}

function clearBoard (board) {
  return Array.from({ length: board.length }).map((_, i) => ({ id: 1, status: false }))
}

let board = Array.from({ length: 8 }, (_, i) => ({ id: i, status: false }))

module.exports = { board, randomizeBoard, clearBoard }
