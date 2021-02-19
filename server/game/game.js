
function randomizeBoard (board) {
  let newBoard = []
  board.forEach(grid => {
    grid.status = Boolean(Math.round(Math.random()))
    newBoard.push(grid)
  })
  return newBoard
}

function clearBoard (board) {
  let newBoard = []
  board.forEach(grid => {
    grid.status = false
    newBoard.push(grid)
  })
  return newBoard
}

let board = Array.from({ length: 36 }, (_, i) => ({ id: i, status: false }))

module.exports = { board, randomizeBoard, clearBoard }
