
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

let board = [
  { id: 0, status: false },
  { id: 1, status: false },
  { id: 2, status: false },
  { id: 3, status: false },
  { id: 4, status: false },
  { id: 5, status: false },
  { id: 6, status: false },
  { id: 7, status: false },
  { id: 8, status: false },
  { id: 9, status: false },
  { id: 10, status: false },
  { id: 11, status: false },
  { id: 12, status: false },
  { id: 13, status: false },
  { id: 14, status: false },
  { id: 15, status: false },
  { id: 16, status: false },
  { id: 17, status: false },
  { id: 18, status: false },
  { id: 19, status: false },
  { id: 20, status: false },
  { id: 21, status: false },
  { id: 22, status: false },
  { id: 23, status: false },
  { id: 24, status: false },
  { id: 25, status: false },
  { id: 26, status: false },
  { id: 27, status: false },
  { id: 28, status: false },
  { id: 29, status: false },
  { id: 30, status: false },
  { id: 31, status: false },
  { id: 32, status: false },
  { id: 33, status: false },
  { id: 34, status: false },
  { id: 35, status: false }
]

module.exports = { board, randomizeBoard, clearBoard }